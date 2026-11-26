/*
 * Technitium DNS Server - Simplified Chinese app store metadata
 * Community localization patch for the GPLv3 project
 * https://github.com/TechnitiumSoftware/DnsServer
 *
 * App names and descriptions are provided by the Technitium app store.
 * This file translates the current store catalog. New or changed apps fall
 * back to their original English text until this catalog is updated.
 */
(function () {
    "use strict";

    var APPS = {
        "Advanced Blocking": {
            name: "高级拦截",
            description: "使用域名拦截列表和正则拦截列表拦截域名。支持按客户端 IP 地址或子网创建分组，为每个分组分别应用不同的拦截列表和正则拦截列表。\n\n注意！此应用独立于 DNS 服务器自带的拦截功能，DNS 服务器“设置”里的选项不会作用于这个应用。"
        },
        "Advanced Forwarding": {
            name: "高级转发",
            description: "提供高级的批量条件转发选项。支持按客户端 IP 地址或子网创建分组，为每个分组启用不同的条件转发配置。支持 AdGuard Upstreams 配置文件。\n\n注意：此应用独立于 DNS 服务器自带的“条件转发区域”功能。"
        },
        "Auto PTR": {
            name: "自动 PTR",
            description: "允许在主区域和转发区域创建 APP 记录，为 IPv4 和 IPv6 的 PTR 查询自动生成响应。"
        },
        "Block Page": {
            name: "拦截提示页",
            description: "通过内置网页服务器提供一个拦截提示页；当 DNS 服务器拦截某个网站时，可以把这个页面展示给终端用户。\n\n注意！需要先在拦截设置里把“拦截类型”设为“自定义地址”，并把当前服务器的 IP 地址配置为“自定义拦截地址”，提示页才会显示。要启用 HTTPS，请使用 PKCS #12 证书（.pfx 或 .p12）。启用 HTTPS 后，用户会看到证书错误，这是预期行为，需要用户忽略证书错误才能看到提示页。如果开启了在线证书签名，可以把本应用配置文件夹里的自签名根证书安装到所有终端系统，避免显示提示页时出现证书错误。"
        },
        "Default Records": {
            name: "默认记录",
            description: "允许为已配置的本地区域设置一条或多条默认记录。"
        },
        "DNS64": {
            name: "DNS64",
            description: "为权威解析和递归解析响应启用 DNS64 功能，供仅使用 IPv6 的客户端使用。\n\n警告！如果安装了 DNS64 应用但没有配置 NAT64，部分网站会出现连接问题。"
        },
        "DNS Block List (DNSBL)": {
            name: "DNS 拦截列表（DNSBL）",
            description: "允许在主区域和转发区域创建 APP 记录，根据配置的 DNS 拦截列表（DNSBL）返回 A 或 TXT 记录。实现基于 RFC 5782。"
        },
        "DNS Rebinding Protection": {
            name: "DNS 重绑定防护",
            description: "使用配置的私有域名和网络防御 DNS 重绑定攻击。\n\n警告！对于不是本地托管的域名，此应用会从响应中移除私有 IP 地址。"
        },
        "Drop Requests": {
            name: "丢弃请求",
            description: "丢弃命中“已拦截网络”或“已拦截问题”列表的入站 DNS 请求。"
        },
        "Failover": {
            name: "故障转移",
            description: "允许在主区域和转发区域创建 APP 记录，根据服务器健康状态返回 A、AAAA 或 CNAME 记录。支持邮件告警和 Webhook 来传递健康状态。"
        },
        "Filter AAAA": {
            name: "过滤 AAAA",
            description: "当同一域名存在 A 记录时，通过返回 NO DATA 响应来过滤 AAAA 记录。这样使用双栈（IPv4 和 IPv6）网络的客户端会优先用 IPv4 连接网站，只有网站不支持 IPv4 时才用 IPv6。"
        },
        "Geo Continent": {
            name: "按洲解析",
            description: "允许在主区域和转发区域创建 APP 记录，根据客户端所在大洲或自治系统号（ASN）返回 A、AAAA 或 CNAME 记录，使用 MaxMind GeoIP2 Country 数据库。支持 EDNS 客户端子网（ECS）。此应用需要 MaxMind GeoIP2 数据库，并附带 GeoLite2 版本供试用。\n\n要更新应用的 MaxMind GeoIP2 数据库，请从 MaxMind 下载 GeoIP2-Country.mmdb 文件并打包成 ZIP，然后用“手动更新”选项上传。应用还可以选用 MaxMind ISP/ASN 数据库，更新方法相同。"
        },
        "Geo Country": {
            name: "按国家解析",
            description: "允许在主区域和转发区域创建 APP 记录，根据客户端所在国家或自治系统号（ASN）返回 A、AAAA 或 CNAME 记录，使用 MaxMind GeoIP2 Country 数据库。支持 EDNS 客户端子网（ECS）。此应用需要 MaxMind GeoIP2 数据库，并附带 GeoLite2 版本供试用。\n\n要更新应用的 MaxMind GeoIP2 数据库，请从 MaxMind 下载 GeoIP2-Country.mmdb 文件并打包成 ZIP，然后用“手动更新”选项上传。应用还可以选用 MaxMind ISP/ASN 数据库，更新方法相同。"
        },
        "Geo Distance": {
            name: "按距离解析",
            description: "允许在主区域和转发区域创建 APP 记录，根据客户端地理位置最近的服务器返回 A、AAAA 或 CNAME 记录，使用 MaxMind GeoIP2 City 数据库。支持 EDNS 客户端子网（ECS）。此应用需要 MaxMind GeoIP2 数据库，并附带 GeoLite2 版本供试用。\n\n要更新应用的 MaxMind GeoIP2 数据库，请从 MaxMind 下载 GeoIP2-City.mmdb 文件并打包成 ZIP，然后用“手动更新”选项上传。应用还可以选用 MaxMind ISP/ASN 数据库，更新方法相同。"
        },
        "Log Exporter": {
            name: "日志导出器",
            description: "允许把查询日志导出到第三方接收端。支持导出到文件、HTTP 端点和 Syslog（UDP、TCP、TLS 和本地协议）。"
        },
        "NO DATA": {
            name: "无数据（NO DATA）",
            description: "允许在条件转发区域创建 APP 记录，对命中已配置查询类型（QTYPE）的请求返回 NO DATA 响应，阻止这些请求被转发。"
        },
        "NX Domain": {
            name: "NX 域名",
            description: "用 NXDOMAIN（域名不存在）响应拦截已配置的域名。"
        },
        "NX Domain Override": {
            name: "NX 域名覆盖",
            description: "用自定义 A/AAAA 记录响应覆盖已配置域名的 NXDOMAIN 响应。"
        },
        "Query Logs (MySQL)": {
            name: "查询日志（MySQL）",
            description: "把所有入站 DNS 请求及其响应记录到 MySQL/MariaDB 数据库，可以从 DNS 服务器 Web 控制台查询。\n\n注意！需要先创建数据库用户，并授予该用户访问数据库的全部权限。请在 MySQL root 提示符下用所需的数据库名和用户名运行以下命令：\nCREATE USER 'user'@'%' IDENTIFIED BY 'password';\nGRANT ALL PRIVILEGES ON DatabaseName.* TO 'user'@'%';\n\n数据库配置好后，编辑应用配置，更新数据库名、连接字符串，并把 enableLogging 设为 true。保存配置后，应用会自动创建所需的数据库结构并开始记录查询。"
        },
        "Query Logs (PostgreSQL)": {
            name: "查询日志（PostgreSQL）",
            description: "把所有入站 DNS 请求及其响应记录到 PostgreSQL 数据库，可以从 DNS 服务器 Web 控制台查询。\n\n注意！需要先创建数据库用户和数据库，并授予该用户访问数据库的全部权限。请在 PostgreSQL root 提示符下用所需的数据库名和用户名运行以下命令：\nCREATE USER \"user\" password 'password';\nCREATE DATABASE \"DatabaseName\" OWNER \"user\";\nGRANT ALL PRIVILEGES ON DATABASE \"DatabaseName\" TO \"user\";\n\n数据库配置好后，编辑应用配置，更新数据库名、连接字符串，并把 enableLogging 设为 true。保存配置后，应用会自动创建所需的数据库表并开始记录查询。"
        },
        "Query Logs (Sqlite)": {
            name: "查询日志（SQLite）",
            description: "把所有入站 DNS 请求及其响应记录到 SQLite 数据库，可以从 DNS 服务器 Web 控制台查询。\n\n注意！查询日志吞吐量受 SQLite 数据库文件所在磁盘的吞吐量限制。不建议在超高吞吐场景（每秒超过 2 万次请求）使用此应用。\n\n警告！把 enableVacuum 设为 true 后，应用会在删除记录后执行 VACUUM 命令，这会增加磁盘 IO，并可能让应用暂时无响应。建议只在需要时临时开启，用来压缩磁盘上的数据库文件。"
        },
        "Query Logs (SQL Server)": {
            name: "查询日志（SQL Server）",
            description: "把所有入站 DNS 请求及其响应记录到 Microsoft SQL Server 数据库，可以从 DNS 服务器 Web 控制台查询。\n\n注意！需要先创建数据库用户，编辑数据库用户属性并启用 dbcreator 服务器角色，应用才能创建和初始化数据库。数据库配置好后，编辑应用配置，更新数据库名、连接字符串，并把 enableLogging 设为 true。保存配置后，应用会自动创建所需的数据库结构并开始记录查询。"
        },
        "Split Horizon": {
            name: "分离视图",
            description: "允许在主区域和转发区域创建 APP 记录，为通过公网、私网或其他指定网络查询的客户端返回不同的 A/AAAA 记录或 CNAME 记录。\n\n支持根据客户端网络地址或配置的域名，对 A 和 AAAA 类型响应中的 IP 地址做地址转换，使用配置的 1:1 转换规则。"
        },
        "Weighted Round Robin": {
            name: "加权轮询",
            description: "允许在主区域和转发区域创建 APP 记录，使用加权轮询负载均衡返回 A、AAAA 或 CNAME 记录。"
        },
        "What Is My Dns": {
            name: "我的 DNS 是什么",
            description: "允许在主区域和转发区域创建 APP 记录，为 A、AAAA 和 TXT 查询返回用户 DNS 服务器的 IP 地址。"
        },
        "Wild IP": {
            name: "通配 IP",
            description: "允许在主区域和转发区域创建 APP 记录，为 A 和 AAAA 查询返回子域名中嵌入的 IP 地址，包括紧凑的十六进制 IPv4 标签。工作方式类似 sslip.io。"
        },
        "Zone Alias": {
            name: "区域别名",
            description: "允许为任意区域（内部或外部）配置别名，让它们都返回同一组记录。"
        }
    };

    window.translateStoreAppInfo = function (name, description) {
        var item = APPS[name];
        if (!item) return { name: name, description: description };
        return { name: item.name, description: item.description };
    };

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function translateStoreRows() {
        var rows = document.querySelectorAll("#tableStoreAppsBody tr");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.getAttribute("data-zh-store") === "1") continue;

            var nameSpan = row.querySelector('span[style*="font-weight: bold"]');
            if (!nameSpan) continue;

            var originalName = nameSpan.textContent.trim();
            var item = APPS[originalName];
            if (!item) continue;

            nameSpan.textContent = item.name;

            var descDiv = row.querySelector('div[style*="margin-bottom: 10px"]');
            if (descDiv) {
                descDiv.innerHTML = escapeHtml(item.description).replace(/\n/g, "<br />");
            }

            row.setAttribute("data-zh-store", "1");
        }
    }

    function installStorePatch() {
        if (typeof window.showStoreAppsModal !== "function" || window.showStoreAppsModal.__zhStorePatched) return;

        var originalShowStoreAppsModal = window.showStoreAppsModal;
        window.showStoreAppsModal = function () {
            var body = document.querySelector("#tableStoreAppsBody");
            if (body && !body.__zhStoreObserver) {
                var observer = new MutationObserver(function () {
                    translateStoreRows();
                });
                observer.observe(body, { childList: true, subtree: true });
                body.__zhStoreObserver = observer;
            }

            var result = originalShowStoreAppsModal.apply(this, arguments);
            setTimeout(translateStoreRows, 0);
            return result;
        };
        window.showStoreAppsModal.__zhStorePatched = true;
    }

    function translateInstalledAppRows() {
        var rows = document.querySelectorAll("#tableAppsBody tr");
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            if (row.getAttribute("data-zh-app") === "1") continue;

            var nameSpan = row.querySelector('span[style*="font-weight: bold"]');
            if (!nameSpan) continue;

            var originalName = nameSpan.textContent.trim();
            var item = APPS[originalName];
            if (!item) continue;

            nameSpan.textContent = item.name;

            var descDivs = row.querySelectorAll('div[style*="margin-top: 10px"]');
            if (descDivs.length > 0 && !descDivs[0].querySelector("a")) {
                descDivs[0].innerHTML = escapeHtml(item.description).replace(/\n/g, "<br />");
            }

            row.setAttribute("data-zh-app", "1");
        }
    }

    function installAppsPageObserver() {
        var body = document.querySelector("#tableAppsBody");
        if (!body || body.__zhAppObserver) return;

        var observer = new MutationObserver(function () {
            translateInstalledAppRows();
        });
        observer.observe(body, { childList: true, subtree: true });
        body.__zhAppObserver = observer;
        setTimeout(translateInstalledAppRows, 0);
    }

    installStorePatch();
    installAppsPageObserver();
})();
