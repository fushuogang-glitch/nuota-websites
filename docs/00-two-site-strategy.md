# 00. 双官网定位与信息架构

## 核心原则

两个官网不要做成重复内容站：

- `nuotaai.cn` 负责“产品转化”：让访客理解诺塔是什么、有什么用、为什么不是 CRM/ERP、怎么预约演示。
- `tataasia.com` 负责“信任背书”：让访客相信诺塔背后有塔塔咨询方法论、案例和陪跑能力。

推荐关系：

```text
tataasia.com  → 咨询信任 → 诺塔入口 → nuotaai.cn
nuotaai.cn    → 产品转化 → 预约演示 → 销售/客服承接
```

## 域名与跳转策略

### 短期可落地

- `tataasia.com/brand-nota.html` 保留访问，但内容全部替换为 NUOTA 新文案。
- 新增 `tataasia.com/brand-nuota.html` 或 `tataasia.com/nuota`，旧 URL 做 301。
- `nuotaai.cn` 恢复前，可临时 301 到 `tataasia.com/brand-nuota.html`。

### 长期建议

- `nuotaai.cn` 作为诺塔产品官网主域。
- `tataasia.com` 保留集团/咨询站。
- `brand-nota.html`、`nota`、`NOTA CORECONTROL` 等旧 URL 与旧文案全部 301 或替换。

## 产品官网 Sitemap：`nuotaai.cn`

```text
/
  Hero：诺塔智能体运营系统 / NUOTA Agentic OS
  品类定义：不是 CRM，不是 ERP
  产品作用：4 个卡片
  产品特点：5 个卡片
  Agent 矩阵：9/12 个 Agent
  OTA 执行模型：Objective → Task → Agent
  美业版：诺塔智能体运营系统 · 美业版
  定价：单店版 / 连锁版（按月付费，连锁按门店数计费）
  案例：种子客户 / 咨询背书
  FAQ：部署、数据安全、硬件、上线周期、售后
  预约演示：表单 + 客服
  关于：嘉塔诺塔 / 品牌关系 / 联系

/beauty
  美业版落地页，可后期再做；前期用首页锚点承接

/pricing
  可独立页面，也可首页锚点；建议前期首页锚点 + 独立 SEO 页后期补

/demo
  预约演示表单页
```

## 集团官网 Sitemap：`tataasia.com`

```text
/
  保留塔塔咨询主结构
  修改服务 04：AI 数字中控 → 诺塔智能体运营系统
  修改 AI 数字化区块 → 诺塔产品入口
  增加集团旗下品牌区块

/brand-nuota.html 或 /nuota
  诺塔品牌页，作为集团站到产品站的过渡页

/consulting
  咨询服务，可后期扩展

/cases
  案例页，后期扩展；前期首页锚点承接
```

## 品牌关系表达

建议在 `tataasia.com` 增加“集团旗下品牌”区块：

```text
塔塔咨询：新美业战略咨询与年度陪跑
诺塔 NUOTA：企业智能体运营系统，让方法论进入系统执行
九木营销学院：营销增长方法与培训
九凤产品学院：品项结构与产品体系
稻塔资产管理：资产与资本相关服务
```

注意：稻塔资产管理如果和金融/资产服务相关，文案要更谨慎，不要承诺收益。