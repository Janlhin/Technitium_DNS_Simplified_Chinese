# -*- coding: utf-8 -*-
"""校验本仓发布物是否存在、SHA256 是否与根目录 ``SHA256SUMS.txt`` 一致。

纯标准库，不依赖任何第三方包；不读写游戏目录，只核对仓库内已登记的文件。

用法::

    python tools/verify_release.py

退出码：0 = 全部通过；1 = 有文件缺失或哈希不符。
"""
import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SUMS = ROOT / "SHA256SUMS.txt"

LINE_RE = re.compile(r"^([0-9A-Fa-f]{64})\s+\*?(.+?)\s*$")


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as fh:
        for chunk in iter(lambda: fh.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


def main() -> int:
    if not SUMS.exists():
        print("[FAIL] 找不到 SHA256SUMS.txt：%s" % SUMS)
        return 1

    failures = []
    checked = 0
    for raw in SUMS.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        m = LINE_RE.match(line)
        if not m:
            failures.append("无法解析的清单行：%s" % raw)
            continue
        expected = m.group(1).lower()
        rel = m.group(2)
        target = ROOT / rel
        if not target.exists():
            failures.append("文件缺失：%s" % rel)
            continue
        actual = sha256_of(target)
        checked += 1
        if actual != expected:
            failures.append("哈希不符：%s\n  清单=%s\n  实测=%s" % (rel, expected, actual))
        else:
            print("[ok]   %s" % rel)

    if failures:
        print("")
        for f in failures:
            print("[FAIL] %s" % f)
        print("\nverify_release: %d 项失败 / 已核对 %d 项" % (len(failures), checked))
        return 1

    print("\nverify_release: 全部通过（%d 项）" % checked)
    return 0


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    sys.exit(main())
