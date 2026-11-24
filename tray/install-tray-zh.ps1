param(
    [string]$InstallDir = 'C:\Program Files (x86)\Technitium\DNS Server'
)

$ErrorActionPreference = 'Stop'

$principal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    throw '请右键选择“以管理员身份运行”，否则无法写入 Program Files。'
}

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$srcDll = Join-Path $here 'DnsServerSystemTrayApp-zh.dll'
$dstDll = Join-Path $InstallDir 'DnsServerSystemTrayApp.dll'
$exe = Join-Path $InstallDir 'DnsServerSystemTrayApp.exe'

if (-not (Test-Path -LiteralPath $srcDll)) { throw "找不到 $srcDll" }
if (-not (Test-Path -LiteralPath $dstDll)) { throw "找不到 $dstDll，请确认 Technitium 安装路径。" }

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'

Get-Process DnsServerSystemTrayApp -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Milliseconds 500

Copy-Item -LiteralPath $dstDll -Destination "$dstDll.bak-zh-$stamp" -Force
Copy-Item -LiteralPath $srcDll -Destination $dstDll -Force

if (Test-Path -LiteralPath $exe) {
    Start-Process -FilePath $exe
    Write-Host '托盘程序已替换并重新启动。'
}
else {
    Write-Host '托盘 DLL 已替换；没有找到托盘 EXE，请手动启动。'
}

Write-Host "旧 DLL 备份：$dstDll.bak-zh-$stamp"
Write-Host '右键点击系统托盘图标检查菜单。'
