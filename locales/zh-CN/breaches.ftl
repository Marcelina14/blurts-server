# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

breach-all-meta-page-title = 数据外泄事件数据库 - { -brand-fx-monitor }
breach-all-meta-social-title = { -brand-fx-monitor } 检测到的所有外泄事件
breach-all-meta-social-description = 浏览 { -brand-fx-monitor } 检测到的已知外泄事件的完整列表，然后查明您的信息是否已泄露。
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-page-title = ”{ $company }“数据外泄事件 - { -brand-fx-monitor }
# Variables:
#   $company (String) - Name of the company that was breached, e.g. "PHP Freaks"
breach-detail-meta-social-title = 您是否受到 { $company } 数据泄露事件的影响？
breach-detail-meta-social-description = 使用 { -brand-fx-monitor } 查明您的个人信息是否在此外泄事件中泄露，并了解下一步该怎么做。

## Links that we might refer to when prompting the user to make changes after a breach

breach-checklist-link-firefox-relay = { -brand-relay }
breach-checklist-link-password-manager = { -brand-firefox } 密码管理器
breach-checklist-link-mozilla-vpn = { -brand-mozilla-vpn }

## Prompts the user for changes when there is a breach detected of password

breach-checklist-pw-header-text = 更新您的密码并启用双因子身份验证（2FA）。
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-pw-body-text = 在大多数情况下，我们建议您在该公司的网站上更改密码。但是<b>他们的网站可能会关闭或包含恶意内容</b>，因此您<breached-company-link>访问该网站</breached-company-link>时，请谨慎行事。为了加强保护，请确保您对不同的账户使用不同的密码，这样任何泄露的密码都无法用于访问其他账户。{ $passwordManagerLink } 可以帮助您安全地跟踪所有密码。

## Prompts the user for changes when there is a breach detected of email

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-email-header-2 = 使用 { $firefoxRelayLink } 等马甲邮箱服务来保护您的邮箱。
breach-checklist-email-body = 这可以将电子邮件转发到您的真实收件箱，隐藏您的真实邮箱地址。

## Prompts the user for changes when there is a breach detected of social security number

# Credit reports list your bill payment history, loans, current debt, and other financial information.
# They show where you work and live and whether you've been sued, arrested, or filed for bankruptcy.
breach-checklist-ssn-header = 关注您的信用报告，查找不认识的银行账户、贷款和信用卡。
# A security freeze prevents prospective creditors from accessing your credit file.
# Creditors typically won't offer you credit if they can't access your credit reporting file,
# so a security freeze, also called a credit freeze, prevents you or others from opening accounts in your name.
# This will only be shown to users in the US.
# Variables:
#   $equifaxLink (string) - a link to the Equifax website
#   $experianLink (string) - a link to the Experian website
#   $transUnionLink (string) - a link to the TransUnion website
breach-checklist-ssn-body-2 = 您还可以考虑冻结您在 { $equifaxLink }、{ $experianLink } 和 { $transUnionLink } 上的信用，以阻止诈骗者以您的名义开设新账户。该服务免费提供，不会影响您的信用评分。

## Prompts the user for changes when there is a breach detected of credit card

breach-checklist-cc-header = 向您的信用卡发卡机构报告此次泄露事件，并申请一张新卡号的信用卡。
breach-checklist-cc-body = 您还应该检查您的信用卡对账单，关注是否有不熟悉的消费记录。

## Prompts the user for changes when there is a breach detected of bank account

breach-checklist-bank-header = 立即通知银行您的账户已被盗用。
breach-checklist-bank-body = 尽快采取行动可以为您争取更多法律保护并挽回损失。 您还需要检查账户中是否有不熟悉的消费记录。

## Prompts the user for changes when there is a breach detected of pin

breach-checklist-pin-header = 立即通知您的发卡行并更改 PIN。
breach-checklist-pin-body = 确保您的新 PIN 以及任何其他 PIN 都不包含容易猜到的数字组合，例如您的出生日期或地址。

## Prompts the user for changes when there is a breach detected of IP address

# Variables:
#   $mozillaVpnLink (string) - a link to the Mozilla VPN website, with { -breach-checklist-link-mozilla-vpn } as the label
breach-checklist-ip-header-2 = 使用 { $mozillaVpnLink } 等 VPN 来私密访问互联网 。
breach-checklist-ip-body = 您的 IP 地址（互联网协议地址）可精准反映您的位置和互联网服务提供商，而 VPN 可以隐藏您的真实 IP 地址，因此您可以私密访问互联网。

## Prompts the user for changes when there is a breach detected of physical address

breach-checklist-address-header = 更改包含您地址的任何部分的密码或 PIN。
breach-checklist-address-body = 地址在公开记录中很容易找到，使这类密码和 PIN 很容易被猜到。

## Prompts the user for changes when there is a breach detected of date of birth

breach-checklist-dob-header = 更改所有包含您出生日期的密码或 PIN。
breach-checklist-dob-body = 出生日期在公开记录中很容易找到，获知它的人很容易就能猜出您的 PIN。

## Prompts the user for changes when there is a breach detected of phone number

# Variables:
#   $firefoxRelayLink (string) - a link to Firefox Relay, with { -breach-checklist-link-firefox-relay } as the label
breach-checklist-phone-header-2 = 使用 { $firefoxRelayLink } 等服务来保护您的手机号，此类服务可隐藏您的真实手机号。

## Prompts the user for changes when there is a breach detected of security questions

breach-checklist-sq-header-text = 更新您的安全问题。
# The `breached-company-link` tags will be replaced with link tags or stripped if no link is available.
breach-checklist-sq-body-text = 在大多数情况下，我们建议您在该公司的网站上更新您的安全问题。但是<b>他们的网站可能会关闭或包含恶意内容</b>，因此您<breached-company-link>访问该网站</breached-company-link>时，请谨慎行事。为了加强保护，请在您使用过的任何重要账户上更新这些安全问题，并为不同的账户创建不同的密码。

## Prompts the user for changes when there is a breach detected of historical password

breach-checklist-hp-header = 为重复使用密码的账户改用独一无二的强密码。
# Variables:
#   $passwordManagerLink (string) - a link to the password manager documentation, with { -breach-checklist-link-password-manager } as the label
breach-checklist-hp-body-2 = 密码管理器（例如免费内置于 { -brand-firefox } 浏览器中的 { $passwordManagerLink }）可以帮助您管理所有密码，并通过您的所有设备安全访问。

## Prompts the user for changes when there is a breach detected of other types

# Variables:
#   $breachDate (String) - Date of the breach
#   $companyName (String) - Name of the company where the breach occurred
breach-checklist-general-header = 联系 { $companyName } 告知他们此次泄露事件，并询问您可以采取的具体步骤。
