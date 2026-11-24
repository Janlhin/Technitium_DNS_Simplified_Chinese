# 系统托盘程序简体中文版

Technitium DNS Server 的 Windows 系统托盘程序是独立的 WinForms 程序，Web 控制台语言包管不到它。这里提供已经编译好的中文版 DLL，以及安装脚本。

## 文件

- `DnsServerSystemTrayApp-zh.dll`：汉化后的托盘程序托管 DLL，程序集版本 `7.0.3.0`
- `install-tray-zh.ps1`：备份旧 DLL、停止托盘进程、替换 DLL、重新启动托盘
- `DnsServerSystemTrayApp-zh.dll.sha256`：DLL 的 SHA-256

## 安装

关闭正在运行的托盘程序，然后用管理员 PowerShell：

```powershell
cd .\tray
.\install-tray-zh.ps1
```

脚本默认安装目录是 `C:\Program Files (x86)\Technitium\DNS Server`；如果装在别处，用 `-InstallDir` 指定。

安装后会生成备份：

```text
DnsServerSystemTrayApp.dll.bak-zh-<时间戳>
```

## 回滚

停掉托盘进程，把最近的 `DnsServerSystemTrayApp.dll.bak-zh-*` 改名回 `DnsServerSystemTrayApp.dll`，再启动 `DnsServerSystemTrayApp.exe`。

## 说明

这个 DLL 基于 Technitium DNS Server v15.6.2 的托盘源码构建，目标框架 `net10.0-windows7.0`。它翻译了右键菜单、管理网络 DNS 提供商窗口、关于窗口和主要消息框。

如果升级 Technitium 后托盘程序版本变化，不要直接覆盖新版本 DLL；请使用仓库 `patches/technitium-dns-zh.patch` 里的托盘源码改动重新构建。

托盘源码改动对应提交：`10d5a08 feat(tray): localize Windows system tray UI to Simplified Chinese`。
