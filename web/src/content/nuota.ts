export const AGENT_COUNT = 9

export const navItems = [
  { label: '产品作用', href: '#value' },
  { label: '产品特点', href: '#features' },
  { label: 'Agent 矩阵', href: '#agents' },
  { label: '美业版', href: '#beauty' },
  { label: '定价', href: '#pricing' },
  { label: '案例', href: '#cases' },
]

export const hero = {
  eyebrow: 'NUOTA Agentic OS',
  title: '诺塔智能体运营系统',
  slogan: '让 AI Agent 主动推动团队执行',
  description:
    '不是 CRM，不是 ERP。诺塔把企业经营目标拆解成任务，嵌入业务流程，通过 AI Agent 主动跟进、预警、协同和复盘，让管理从“人盯人”变成“系统推动人”。',
  beauty: '首发美业版：服务美业门店、连锁品牌与经营团队',
  primaryCta: '预约演示',
  secondaryCta: '查看定价',
  note: 'NUOTA = Networked Unified Operations & Team Agents · OTA 执行模型：Objective → Task → Agent',
}

export const comparisons = [
  {
    title: 'CRM',
    desc: '记录客户关系，但不一定推动执行。',
  },
  {
    title: 'ERP',
    desc: '管理资源流程，但不一定主动协同。',
  },
  {
    title: '诺塔 NUOTA',
    desc: '把目标变成任务，让 AI Agent 主动推动团队完成。',
  },
]

export const values = [
  {
    title: '把目标变成执行',
    desc: '把经营目标转化为任务流，让团队知道今天该做什么、谁来做、做到什么程度。',
  },
  {
    title: '让系统主动推动人',
    desc: 'AI Agent 主动识别进度、提醒风险、推动协作，而不是等管理者发现问题后再补救。',
  },
  {
    title: '把管理从经验变成闭环',
    desc: '目标、任务、执行、反馈、复盘连成闭环，沉淀可复制的系统能力。',
  },
  {
    title: '让团队执行更稳定',
    desc: '减少漏跟、漏办、拖延和信息断层，让执行动作更标准、更连续、更可追踪。',
  },
]

export const features = [
  {
    title: '智能体运营系统',
    desc: '诺塔服务的不只是“管理数据”，而是“推动执行”。',
  },
  {
    title: 'AI Agent 协同工作',
    desc: '多个 Agent 围绕目标拆解、任务分配、过程跟进、结果反馈和经营复盘协同工作。',
  },
  {
    title: 'OTA 执行模型',
    desc: 'Objective → Task → Agent，把经营目标翻译成每天可执行、可检查、可复盘的行动。',
  },
  {
    title: '主动式管理',
    desc: 'AI Agent 主动推动任务前进，主动暴露风险，主动提醒关键动作。',
  },
  {
    title: '行业可扩展',
    desc: '首发美业版，可复制到连锁、零售、服务业、教育培训等行业。',
  },
]

export const agents = [
  { code: 'A-01', name: '数据信息 Agent', desc: '每日自动汇总经营数据，生成结构化日报，异常智能预警。' },
  { code: 'A-02', name: '品牌内容 Agent', desc: '规划内容方向，追踪互动表现，给出选题与发布建议。' },
  { code: 'A-03', name: '引流增长 Agent', desc: '分析投放与引流效果，预警异常成本，推荐调整方案。' },
  { code: 'A-04', name: '会员管理 Agent', desc: '客户分级管理，到店频次预警，自动触发邀约与跟进。' },
  { code: 'A-05', name: '流程检查 Agent', desc: '每日巡检 SOP 执行情况，偏差立即预警，标准不打折。' },
  { code: 'A-06', name: '财务经营 Agent', desc: '收支记录、报表生成、预算监控、税务与风险提醒。' },
  { code: 'A-07', name: '人力组织 Agent', desc: '员工管理、绩效追踪、异常预警、组织健康监控。' },
  { code: 'A-08', name: '客户服务 Agent', desc: '平台私信自动回复，差评实时预警，话术建议。' },
  { code: 'A-09', name: '智总 Agent', desc: '统筹其他 Agent，负责异常升级、执行调度和跨模块协同。' },
]

export const otaSteps = [
  {
    title: 'Objective 目标',
    desc: '把增长、运营、服务目标录入系统，形成可追踪目标。',
  },
  {
    title: 'Task 任务',
    desc: '系统自动拆解成日/周/月任务，分配到人和场景。',
  },
  {
    title: 'Agent 执行',
    desc: 'AI Agent 主动提醒、协同、催办、反馈和复盘。',
  },
]

export const pricingPlans = [
  {
    name: '单店版',
    price: '¥2,999',
    unit: '/月',
    monthly: '按月付费',
    features: [`${AGENT_COUNT} 个 AI Agent`, '单店部署', '基础数据看板', '远程配置上线', '在线客服支持'],
    cta: '预约演示',
    recommended: true,
  },
  {
    name: '连锁版',
    price: '首店 ¥2,999',
    unit: '/月',
    monthly: '第 2 店起每店 ¥1,500/月',
    features: [`${AGENT_COUNT} 个 AI Agent`, '多店统一管理', '跨店数据汇总', '连锁经营看板', '专属客户成功经理', '月度策略陪跑'],
    cta: '咨询连锁方案',
    recommended: false,
  },
]

export const cases = [
  {
    city: '武汉',
    name: '武汉一二一连锁',
    desc: '5 家连锁门店，引入诺塔智能体运营系统，实现门店数据实时汇总、客户智能管理、销售自动触发。',
    tag: '诺塔 NUOTA 种子客户',
  },
  {
    city: '长沙',
    name: '长沙 Q+新颜',
    desc: '2 家门店，完成塔塔三多法则系统搭建，客户分级管理体系落地，门店自运转能力显著提升。',
    tag: '诺塔 NUOTA 种子客户',
  },
  {
    city: '扬中',
    name: '青檀美容',
    desc: '三线城市门店，通过塔塔方法论重建品项结构与客户分级体系，摆脱低价竞争陷阱。',
    tag: '战略咨询 · 系统重建',
  },
]

export const faqs = [
  {
    q: '需要购买硬件吗？',
    a: '不需要强制购买硬件。远程配置上线，按月付费；如涉及门店设备，可单独评估。',
  },
  {
    q: '上线周期多久？',
    a: '单店通常以远程配置为主，具体周期取决于数据基础、门店流程和版本范围。',
  },
  {
    q: '和现有 CRM/ERP/收银系统能对接吗？',
    a: '诺塔定位不是替代所有系统，而是把目标、任务和执行闭环跑起来；对接能力以实际系统开放程度为准。',
  },
  {
    q: 'Agent 会不会替代员工？',
    a: '诺塔更强调放大团队执行力，承担重复性运营动作，让员工回到服务、成交和客户关系上。',
  },
]
