import { ArrowRight, Bot, Check, ListChecks, RefreshCw, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  AGENT_COUNT,
  agents,
  cases,
  comparisons,
  faqs,
  features,
  hero,
  navItems,
  otaSteps,
  pricingPlans,
  values,
} from '@/content/nuota'

const icons = [Target, ListChecks, Bot, RefreshCw]
const cardClass = 'border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.05)]'
const primaryButton = 'rounded-full bg-black text-white hover:bg-black/85'
const outlineButton = 'rounded-full border-black/20 bg-white text-black hover:border-black'
const mutedText = 'text-black/60'

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge variant="outline" className="mb-4 rounded-full border-black/20 bg-white px-4 py-1 text-xs font-medium tracking-[0.24em] text-black">
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold tracking-tight text-black md:text-4xl">{title}</h2>
      {desc ? <p className={`mt-4 text-base leading-7 ${mutedText}`}>{desc}</p> : null}
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="bg-black text-white">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs md:px-8">
            <p className="truncate font-medium tracking-wide">用诺塔 NUOTA Agentic OS · 让中国美业运营智能起来</p>
            <div className="hidden items-center gap-5 text-white/70 md:flex">
              <span>邮箱：fuxirui@tatazixun.com</span>
              <span>电话：17279676768</span>
            </div>
          </div>
        </div>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-bold text-white">N</span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-black">诺塔</span>
              <span className="block text-xs font-medium tracking-[0.3em] text-black/50">NUOTA</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-black/60 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-black">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className={primaryButton}>
            <a href="#demo">预约演示</a>
          </Button>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-16 md:px-8 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="rounded-full bg-black px-4 py-1 text-xs font-medium tracking-[0.24em] text-white hover:bg-black">
                {hero.eyebrow}
              </Badge>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-black md:text-7xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-2xl font-medium tracking-tight text-black md:text-3xl">{hero.slogan}</p>
              <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${mutedText}`}>{hero.description}</p>
              <p className="mt-4 text-sm font-medium text-black">{hero.beauty}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className={`${primaryButton} px-8`}>
                  <a href="#demo">
                    {hero.primaryCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className={`${outlineButton} px-8`}>
                  <a href="#pricing">{hero.secondaryCta}</a>
                </Button>
              </div>
              <p className="mt-6 text-xs leading-6 text-black/50">{hero.note}</p>
            </div>

            <Card className={`${cardClass} rounded-[1.75rem]`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base text-black">
                  <span>OTA 执行模型</span>
                  <Badge variant="outline" className="border-black/20 text-black/60">Objective → Task → Agent</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {otaSteps.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <p className="font-medium text-black">{step.title}</p>
                    </div>
                    <p className={`mt-3 text-sm leading-6 ${mutedText}`}>{step.desc}</p>
                  </div>
                ))}
                <Separator className="bg-black/10" />
                <p className={`text-sm leading-6 ${mutedText}`}>让目标进系统、任务有人盯、执行被推动、结果可追踪。</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="CATEGORY"
            title="不是 CRM，不是 ERP，是智能体运营系统"
            desc="传统软件等待人录入和查看，诺塔让系统主动提醒、协同、催办和复盘。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {comparisons.map((item) => (
              <Card key={item.title} className={cardClass}>
                <CardHeader>
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className={`text-sm leading-6 ${mutedText}`}>{item.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="value" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="VALUE" title="诺塔的作用：让目标真正落到每天的动作里" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => {
              const Icon = icons[index] ?? Target
              return (
                <Card key={item.title} className={cardClass}>
                  <CardHeader>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="pt-4 text-lg text-black">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={`text-sm leading-6 ${mutedText}`}>{item.desc}</CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="features" className="border-y border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <SectionHeading eyebrow="FEATURES" title="为什么诺塔不是普通管理工具" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {features.map((item, index) => (
                <Card key={item.title} className="border-black/10 bg-white">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit border-black/20 text-black/50">0{index + 1}</Badge>
                    <CardTitle className="text-base text-black">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className={`text-sm leading-6 ${mutedText}`}>{item.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="agents" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="AGENTS"
            title={`${AGENT_COUNT} 个 AI Agent 数字员工，各司其职全天候运转`}
            desc="每个 Agent 专注一个经营环节，协同完成目标拆解、过程跟进、风险预警和结果反馈。数量口径可在 src/content/nuota.ts 中统一调整。"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {agents.map((agent) => (
              <Card key={agent.code} className={cardClass}>
                <CardHeader className="flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-base text-black">{agent.name}</CardTitle>
                  <Badge className="bg-black text-white hover:bg-black">{agent.code}</Badge>
                </CardHeader>
                <CardContent className={`text-sm leading-6 ${mutedText}`}>{agent.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="beauty" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <div className="rounded-[2rem] bg-black px-6 py-12 text-white md:px-12">
            <Badge className="bg-white text-black hover:bg-white">BEAUTY EDITION</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">诺塔智能体运营系统 · 美业版</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
              面向美业门店、连锁品牌与经营团队的 AI Agent 智能体运营系统。把塔塔咨询方法论沉淀进系统，覆盖数据、内容、引流、会员、流程、财务、人力、客服与经营复盘。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
                <a href="#demo">预约美业版演示</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">
                <a href="#pricing">查看美业版定价</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="PRICING" title="透明定价，按月付费" desc="不含硬件设备，远程配置上线。连锁版按门店数计费，具体功能以实际开通版本为准。" />
          <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border border-black/10 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.05)] md:p-8">
            <p className="text-xl font-semibold tracking-tight text-black md:text-2xl">拥有诺塔，相当于把塔塔咨询的方法论装进系统</p>
            <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 px-4 py-3">
                <p className="text-black/50">塔塔咨询年度陪跑</p>
                <p className="mt-1 text-lg font-semibold text-black">¥30万/年起</p>
              </div>
              <div className="rounded-2xl border border-black bg-black px-4 py-3 text-white">
                <p className="text-white/60">诺塔智能体运营系统</p>
                <p className="mt-1 text-lg font-semibold">¥2,999/月</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-black/60">同一套方法论，用系统方式落地，让更多门店用得起专业标准。</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 lg:grid-cols-2">
            {pricingPlans.map((plan) => (
              <Card key={plan.name} className={plan.recommended ? `relative border-black ${cardClass}` : cardClass}>
                {plan.recommended ? <Badge className="absolute -top-3 left-6 bg-black text-white">推荐</Badge> : null}
                <CardHeader>
                  <CardTitle className="text-black">{plan.name}</CardTitle>
                  <div className="pt-2">
                    <span className="text-4xl font-semibold tracking-tight text-black">{plan.price}</span>
                    <span className="text-black/50">{plan.unit}</span>
                  </div>
                  <p className="text-sm font-medium text-black">{plan.monthly}</p>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-3 text-sm ${mutedText}`}>
                    {plan.features.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`mt-6 w-full ${plan.recommended ? primaryButton : outlineButton}`} variant={plan.recommended ? 'default' : 'outline'}>
                    <a href="#demo">{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="cases" className="border-y border-black/10 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <SectionHeading eyebrow="CASES" title="从咨询方法论到系统执行" desc="诺塔由嘉塔诺塔推出，承接塔塔咨询在新美业十余年的经营方法论。" />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {cases.map((item) => (
                <Card key={item.name} className="border-black/10 bg-white">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit border-black/20 text-black/50">{item.city}</Badge>
                    <CardTitle className="text-lg text-black">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm leading-6 ${mutedText}`}>{item.desc}</p>
                    <p className="mt-4 text-xs font-medium text-black">→ {item.tag}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="FAQ" title="常见问题" />
          <div className="mt-10 space-y-4">
            {faqs.map((item) => (
              <Card key={item.q} className={cardClass}>
                <CardHeader>
                  <CardTitle className="text-base text-black">{item.q}</CardTitle>
                </CardHeader>
                <CardContent className={`text-sm leading-6 ${mutedText}`}>{item.a}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="demo" className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
          <div className={`grid gap-8 rounded-[2rem] p-6 md:p-10 lg:grid-cols-[0.9fr_1.1fr] ${cardClass}`}>
            <div>
              <Badge className="rounded-full bg-black text-white hover:bg-black">DEMO</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black">预约演示，看看 AI Agent 怎么推动团队执行</h2>
              <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                提交后顾问将在 1 个工作日内联系你。当前表单为前端 UI，接 CRM / 企业微信 webhook 后即可上线。
              </p>
              <div className="mt-6 space-y-2 text-sm text-black/60">
                <p>官方邮箱：fuxirui@tatazixun.com</p>
                <p>联系电话：17279676768</p>
                <p>公司主体：上海嘉塔诺塔企业管理咨询有限公司</p>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="姓名" className="border-black/20 bg-white" />
                <Input placeholder="手机号" className="border-black/20 bg-white" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder="门店数量：单店 / 2-5 家 / 6-20 家 / 20+ 家" className="border-black/20 bg-white" />
                <Input placeholder="所在城市" className="border-black/20 bg-white" />
              </div>
              <Input placeholder="当前最头疼的问题：目标不落 / 员工执行 / 会员复购 / 引流成本 / 数据不清" className="border-black/20 bg-white" />
              <Textarea placeholder="备注：想重点看哪个 Agent 或哪个场景？" rows={4} className="border-black/20 bg-white" />
              <Button className={primaryButton}>提交预约</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-[1.2fr_0.6fr_0.6fr_1fr]">
          <div>
            <p className="font-semibold text-white">诺塔 NUOTA</p>
            <p className="mt-2 text-sm leading-6 text-white/70">诺塔智能体运营系统 NUOTA Agentic OS</p>
            <p className="mt-4 text-sm text-white/60">邮箱：fuxirui@tatazixun.com</p>
            <p className="mt-1 text-sm text-white/60">电话：17279676768</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">导航</p>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">资源</p>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              <a href="#faq" className="transition hover:text-white">常见问题</a>
              <a href="#demo" className="transition hover:text-white">联系顾问</a>
              <a href="#top" className="transition hover:text-white">隐私政策</a>
              <a href="#top" className="transition hover:text-white">用户协议</a>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/15 p-5">
            <p className="text-sm font-semibold text-white">AI 模型合作</p>
            <p className="mt-2 text-xs leading-5 text-white/50">Logo 占位，正式启用前请确认品牌授权与官方 Logo 素材。</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Kimi', 'MiniMax', 'DeepSeek', '通义千问', '等国内厂商品牌'].map((item) => (
                <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 上海嘉塔诺塔企业管理咨询有限公司</p>
          <p>ICP备案号：待补充 · 隐私政策 / 用户协议</p>
        </div>
      </footer>
    </div>
  )
}
