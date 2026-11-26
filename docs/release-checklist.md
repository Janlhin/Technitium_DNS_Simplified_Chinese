# 发布检查清单

发版前逐项勾选；任一项不通过，不打发布包、不发 Release。

## 产物齐全

- [ ] `dist/Technitium-DNS-Server-中文语言包.zip` 存在且可解压。
- [ ] `tray/DnsServerSystemTrayApp-zh.dll` 存在。
- [ ] `webui/js/` 下三个脚本（`i18n-zh.js`、`i18n-zh-help.js`、`i18n-zh-apps.js`）齐备。
- [ ] 包内安装/卸载脚本就位（Web 控制台 `install-zh.ps1` / `uninstall-zh.ps1`；托盘 `install-tray-zh.ps1`）。

## 校验和一致

- [ ] 运行 `python tools/verify_release.py`，全部通过（退出码 0）。
- [ ] `SHA256SUMS.txt` 行数与实际登记文件数一致；没有登记不存在的文件。
- [ ] 未把构建缓存、临时解压目录、本地备份计入清单。

## 文档与版本对齐

- [ ] README 登记的目标上游版本与本次载荷一致；未核对的版本不写「兼容」结论。
- [ ] 安装、卸载、回滚步骤与 `docs/release-and-rollback.md` 一致。
- [ ] `CHANGELOG.md` 已记录本版改动。

## 回滚路径可用

- [ ] Web 控制台可由 `webui/uninstall-zh.ps1` 还原。
- [ ] 托盘留有 `.bak-zh-*` 备份，可改名回滚为上游 DLL。
- [ ] 升级上游后重装/重建路径在文档中写明。

## 门禁

- [ ] `release-check.yml` 工作流通过；本地未跑通的步骤不写入 CI。
