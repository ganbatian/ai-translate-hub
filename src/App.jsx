import React, { useState } from 'react'
import { Globe, ExternalLink, Search, Star, Zap, Languages, ArrowRight, TrendingUp } from 'lucide-react'

const tools = [
  {
    name: 'DeepL',
    desc: '业界最准确的AI翻译，支持31种语言，语境理解极强',
    url: 'https://www.deepl.com',
    tags: ['精准', '专业'],
    color: 'from-blue-500 to-indigo-600',
    hot: true,
    langs: 31,
  },
  {
    name: 'Google 翻译',
    desc: '全球最广泛使用的翻译工具，支持133种语言，免费无限制',
    url: 'https://translate.google.com',
    tags: ['免费', '多语言'],
    color: 'from-green-500 to-teal-600',
    hot: true,
    langs: 133,
  },
  {
    name: 'ChatGPT 翻译',
    desc: '基于GPT-4的智能翻译，支持自定义风格和语气调整',
    url: 'https://chat.openai.com',
    tags: ['AI', '可定制'],
    color: 'from-emerald-500 to-green-600',
    hot: true,
    langs: 50,
  },
  {
    name: 'Claude 翻译',
    desc: 'Anthropic出品，擅长长文翻译和专业术语处理',
    url: 'https://claude.ai',
    tags: ['长文', '专业'],
    color: 'from-orange-500 to-amber-600',
    hot: false,
    langs: 40,
  },
  {
    name: '有道翻译',
    desc: '网易出品，中英日韩翻译准确，内置词典和例句',
    url: 'https://fanyi.youdao.com',
    tags: ['中文优化', '词典'],
    color: 'from-red-500 to-rose-600',
    hot: true,
    langs: 20,
  },
  {
    name: '百度翻译',
    desc: '百度AI翻译，中文语境理解强，支持文档翻译',
    url: 'https://fanyi.baidu.com',
    tags: ['中文', '文档'],
    color: 'from-blue-600 to-blue-700',
    hot: false,
    langs: 28,
  },
  {
    name: '腾讯翻译君',
    desc: '腾讯AI翻译，专注中英互译，支持语音和图片翻译',
    url: 'https://fanyi.qq.com',
    tags: ['语音', '图片'],
    color: 'from-cyan-500 to-blue-500',
    hot: false,
    langs: 16,
  },
  {
    name: 'Kimi 翻译',
    desc: '月之暗面出品，支持超长文档翻译，上下文理解强',
    url: 'https://kimi.moonshot.cn',
    tags: ['长文档', '上下文'],
    color: 'from-violet-500 to-purple-600',
    hot: true,
    langs: 30,
  },
  {
    name: 'Microsoft 翻译',
    desc: '微软Azure AI翻译，企业级质量，支持实时对话翻译',
    url: 'https://www.bing.com/translator',
    tags: ['企业级', '实时'],
    color: 'from-sky-500 to-blue-600',
    hot: false,
    langs: 70,
  },
  {
    name: 'Papago',
    desc: 'Naver出品，亚洲语言翻译专家，韩日中翻译最佳',
    url: 'https://papago.naver.com',
    tags: ['韩语', '日语'],
    color: 'from-green-600 to-emerald-700',
    hot: false,
    langs: 15,
  },
  {
    name: 'Immersive Translate',
    desc: '沉浸式双语翻译插件，网页实时对照翻译，学习神器',
    url: 'https://immersivetranslate.com',
    tags: ['双语', '插件'],
    color: 'from-purple-500 to-pink-600',
    hot: true,
    langs: 40,
  },
  {
    name: 'Gemini 翻译',
    desc: 'Google Gemini多模态翻译，支持图片文字识别翻译',
    url: 'https://gemini.google.com',
    tags: ['多模态', '图片'],
    color: 'from-blue-500 to-purple-600',
    hot: true,
    langs: 40,
  },
]

const categories = ['全部', '免费', '中文优化', 'AI', '专业', '多语言']

export default function App() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('全部')
  const [hoveredTool, setHoveredTool] = useState(null)

  const filtered = tools.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.includes(search) ||
      t.tags.some(tag => tag.includes(search))
    const matchCat = activeCategory === '全部' || t.tags.includes(activeCategory)
    return matchSearch && matchCat
  })

  const hotTools = tools.filter(t => t.hot)

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-gray-900/60 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold">AI 翻译工具聚合</h1>
              <p className="text-xs text-white/40">精选 {tools.length} 款 AI 翻译工具</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>{hotTools.length} 款热门</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            找到最适合你的 AI 翻译工具
          </h2>
          <p className="text-white/50 text-sm">从专业文档到日常对话，AI 翻译让语言不再是障碍</p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
          <input
            type="text"
            placeholder="搜索翻译工具..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm placeholder-white/30"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-white'
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-6 text-sm text-white/40">
          <span>共 <span className="text-white font-medium">{filtered.length}</span> 款工具</span>
          <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-yellow-400" /> 热门推荐</span>
          <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-sky-400" /> 精选收录</span>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <a
              key={i}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredTool(i)}
              onMouseLeave={() => setHoveredTool(null)}
              className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 block"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm">{tool.name}</span>
                      {tool.hot && <Zap className="w-3.5 h-3.5 text-yellow-400" />}
                    </div>
                    <span className="text-xs text-white/40">{tool.langs}+ 种语言</span>
                  </div>
                </div>
                <ExternalLink className={`w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 mt-1`} />
              </div>

              <p className="text-xs text-white/50 leading-relaxed mb-3 line-clamp-2">{tool.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {tool.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <ArrowRight className={`w-4 h-4 transition-all ${hoveredTool === i ? 'text-sky-400 translate-x-1' : 'text-white/20'}`} />
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <Globe className="w-12 h-12 mx-auto mb-3 opacity-20" />
            <p>没有找到匹配的工具</p>
          </div>
        )}

        <footer className="mt-12 text-center text-xs text-white/20">
          <p>AI 翻译工具聚合 · 持续更新中</p>
        </footer>
      </div>
    </div>
  )
}
