# 诺塔 NUOTA 双官网内容与结构仓库

本目录用于整理两个官网的文案、结构、功能与替换清单，方便直接提交到代码仓库或交给技术/设计落地。

## 两个官网定位

- `nuotaai.cn`：诺塔产品官网。核心目标是产品认知、预约演示、定价转化、美业版落地。
- `tataasia.com`：塔塔咨询集团站。核心目标是咨询背书、方法论信任、案例证明、向诺塔产品导流。

## 目录结构

```text
docs/
  00-two-site-strategy.md          # 双站定位、信息架构、域名与跳转策略
  01-nuotaai-product-site.md       # 诺塔产品官网页面结构、文案、功能模块
  02-tataasia-group-site.md        # 塔塔咨询集团站修改方案与替换块
  03-replacement-and-compliance.md # 旧文替换、商标/广告法/SEO/301 清单
  04-functional-requirements.md    # 功能需求、CMS 字段、表单、埋点、性能
  05-content-assets-checklist.md   # 上线前需要的素材与确认项
web/                               # 诺塔产品官网 React + Tailwind 代码
  src/content/nuota.ts             # 官网文案与配置，Agent 数量在这里统一改
  src/pages/Home.tsx               # 首页结构，适合交给 v0 继续做视觉设计
```

## 产品官网代码

`web/` 是 React + TypeScript + Vite + Tailwind CSS + shadcn/ui 项目，方便后续用 v0 设计页面，也可部署到 Vercel。

```bash
cd web
npm install
npm run dev
npm run build
```

Vercel 部署时把 Root Directory 设置为 `web`。

## 必须先确认的决策

1. AI Agent 数量：官网旧页是 **12 个数字员工**，新品牌文案默认是 **9 个 AI Agent**。代码里统一改 `web/src/content/nuota.ts` 的 `AGENT_COUNT` 和 `agents`。
2. 定价已更新：单店版 ¥2,999/月；连锁版首店 ¥2,999/月，第 2 店起每店 ¥1,500/月。
3. 宣传语边界：`替代 5-8 名员工`、`98% 毛利率`、`95% 续约率`、`3× 业绩增长` 是否保留或软化。
4. `nuotaai.cn` 当前无法访问，需要先恢复或暂时用 `tataasia.com/brand-nuota.html` 承接。
5. 商标符号：未注册成功前建议不使用 `™/®`，页面先写“诺塔 / NUOTA”。

## 远程仓库

当前已配置远程仓库：

```text
git@github.com:fushuogang-glitch/nuota-websites.git
```

推送使用本地 Deploy Key：

```text
/Users/jiuyi/Documents/kimi/workspace/.ssh/kimi_nuota_deploy
```