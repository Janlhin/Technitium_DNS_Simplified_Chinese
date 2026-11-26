# 发布、安装、回滚与版本兼容说明

> 本仓是 **Technitium DNS Server 简体中文汉化补丁**，不是上游服务端工程。
> 本文只覆盖汉化载荷的安装、卸载、回滚、版本兼容与校验和；上游编译、服务端配置不在本仓范围。

## 1. 发布物清单

| 发布物 | 路径 | 说明 |
|---|---|---|
| Web 控制台语言包 | `dist/Technitium-DNS-Server-中文语言包.zip` | 一键语言包，内含 Web UI 三个中文脚本与安装脚本 |
| 系统托盘中文 DLL | `tray/DnsServerSystemTrayApp-zh.dll` | 托盘右键菜单、关于窗口、管理 DNS 提供商窗口、主要消息框汉化 |
| Web UI 脚本（源文件） | `webui/js/i18n-zh.js`、`i18n-zh-help.js`、`i18n-zh-apps.js` | 浏览器端显示文案 |
| 源码补丁 | `patches/technitium-dns-zh.patch` | Web UI 与托盘源码改动记录，供重建参考，不是安装载荷 |

校验和登记在根目录 `SHA256SUMS.txt`；校验命令见第 5 节。

## 2. 安装

### 2.1 Web 控制台汉化

先备份 Technitium 的 `www` 目录，再用管理员 PowerShell：

```powershell
Expand-Archive .\dist\Technitium-DNS-Server-中文语言包.zip -DestinationPath .\dist\package -Force
cd .\dist\package\Technitium-zh-CN
.\install-zh.ps1
```

默认安装目录为 `C:\Program Files (x86)\Technitium\DNS Server`；装在别处时：

```powershell
.\install-zh.ps1 -InstallDir 'D:\Technitium\DNS Server'
```

安装脚本会备份 `index.html` 和相关 JS，把三个脚本放到 `www\js`，并在 `</body>` 前插入三个 `<script>` 引用。装完按 `Ctrl + F5` 强制刷新浏览器；不需要重启 DNS 服务。

### 2.2 系统托盘汉化

关闭正在运行的托盘程序，再用管理员 PowerShell：

```powershell
cd .\tray
.\install-tray-zh.ps1
```

脚本会停止旧托盘进程、备份旧 DLL、替换成中文 DLL、再启动托盘。

## 3. 卸载

### 3.1 Web 控制台

```powershell
cd .\webui
.\uninstall-zh.ps1
```

### 3.2 系统托盘

停掉托盘进程，把最近的 `DnsServerSystemTrayApp.dll.bak-zh-*` 改名回 `DnsServerSystemTrayApp.dll`，再启动托盘。

## 4. 回滚与版本兼容

- **目标版本**：Technitium DNS Server `v15.6.2`（按本仓 README 登记）。
- **托盘 DLL**：程序集版本 `7.0.3.0`，目标框架 `net10.0-windows7.0`。
- Web UI 只改浏览器端显示，不改 DNS 服务、配置、缓存和查询日志。
- **升级 Technitium 后**：`www` 目录会被覆盖，升级完重新安装语言包即可。
- **升级后托盘程序版本变化**：不要直接覆盖新 DLL；需要时用 `patches/technitium-dns-zh.patch` 在上游新版本上重新构建。
- 本仓未核对更新的上游版本兼容性；未核对项不以「兼容」结论写出。

## 5. 校验和

- 登记文件：根目录 `SHA256SUMS.txt`（SHA256，每行 `哈希  相对路径`）。
- 自动校验（纯标准库）：

  ```powershell
  python tools/verify_release.py
  ```

- 手动核对（PowerShell）：

  ```powershell
  Get-FileHash .\dist\Technitium-DNS-Server-中文语言包.zip -Algorithm SHA256
  Get-FileHash .\tray\DnsServerSystemTrayApp-zh.dll -Algorithm SHA256
  ```

- 哈希不符或文件缺失时，不要安装该份载荷，先从仓库重新获取。
