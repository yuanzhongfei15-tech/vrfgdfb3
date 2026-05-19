const toolsData = [
  {
    id: 1,
    name: "ChatGPT",
    category: "ai-writing",
    description: "OpenAI开发的对话式AI助手，支持多轮对话、代码生成、内容创作等",
    url: "https://chat.openai.com",
    icon: "🤖"
  },
  {
    id: 2,
    name: "Claude",
    category: "ai-writing",
    description: "Anthropic开发的AI助手，擅长长文本处理、文档分析和编程",
    url: "https://claude.ai",
    icon: "📚"
  },
  {
    id: 3,
    name: "Gemini",
    category: "ai-writing",
    description: "Google开发的多模态AI，支持文本、图像、视频理解",
    url: "https://gemini.google.com",
    icon: "✨"
  },
  {
    id: 4,
    name: "Notion AI",
    category: "ai-writing",
    description: "Notion内置的AI写作助手，帮助生成和优化文档内容",
    url: "https://www.notion.so",
    icon: "📝"
  },
  {
    id: 5,
    name: "Jasper",
    category: "ai-writing",
    description: "专业的AI营销文案工具，用于生成广告、博客、社交媒体内容",
    url: "https://www.jasper.ai",
    icon: "🎯"
  },
  {
    id: 6,
    name: "Copy.ai",
    category: "ai-writing",
    description: "AI文案生成工具，快速创建营销文案、邮件、产品描述",
    url: "https://www.copy.ai",
    icon: "✍️"
  },
  {
    id: 7,
    name: "GrammarlyGO",
    category: "ai-writing",
    description: "Grammarly的AI写作助手，提供智能写作建议和内容生成",
    url: "https://www.grammarly.com",
    icon: "📖"
  },
  {
    id: 8,
    name: "Midjourney",
    category: "ai-painting",
    description: "Discord上的AI绘画工具，通过文字描述生成精美图像",
    url: "https://www.midjourney.com",
    icon: "🎨"
  },
  {
    id: 9,
    name: "DALL·E",
    category: "ai-painting",
    description: "OpenAI的图像生成AI，根据文字描述创建独特的艺术作品",
    url: "https://openai.com/dall-e-3",
    icon: "🖼️"
  },
  {
    id: 10,
    name: "Stable Diffusion",
    category: "ai-painting",
    description: "开源的AI绘画模型，支持本地部署和多种风格生成",
    url: "https://stability.ai",
    icon: "🌈"
  },
  {
    id: 11,
    name: "Canva AI",
    category: "ai-painting",
    description: "Canva的AI设计工具，一键生成专业级设计作品",
    url: "https://www.canva.com",
    icon: "🎭"
  },
  {
    id: 12,
    name: "Adobe Firefly",
    category: "ai-painting",
    description: "Adobe的创意生成式AI，用于图像生成和编辑",
    url: "https://firefly.adobe.com",
    icon: "🔥"
  },
  {
    id: 13,
    name: "Leonardo AI",
    category: "ai-painting",
    description: "专业的AI艺术生成平台，专注于游戏资产和角色设计",
    url: "https://leonardo.ai",
    icon: "⚔️"
  },
  {
    id: 14,
    name: "Sora",
    category: "ai-video",
    description: "OpenAI的视频生成模型，可生成长达60秒的高质量视频",
    url: "https://openai.com/sora",
    icon: "🎬"
  },
  {
    id: 15,
    name: "Runway",
    category: "ai-video",
    description: "专业的AI视频创作平台，提供视频生成、编辑和特效",
    url: "https://runwayml.com",
    icon: "🎥"
  },
  {
    id: 16,
    name: "Pika Labs",
    category: "ai-video",
    description: "AI视频生成工具，支持文本到视频和图像到视频",
    url: "https://pika.art",
    icon: "🎞️"
  },
  {
    id: 17,
    name: "HeyGen",
    category: "ai-video",
    description: "AI数字人视频生成平台，快速创建专业的讲解视频",
    url: "https://www.heygen.com",
    icon: "👤"
  },
  {
    id: 18,
    name: "Synthesia",
    category: "ai-video",
    description: "AI视频制作平台，使用数字人创建讲解视频",
    url: "https://www.synthesia.io",
    icon: "🎤"
  },
  {
    id: 19,
    name: "CapCut AI",
    category: "ai-video",
    description: "字节跳动的视频编辑工具，内置AI功能",
    url: "https://www.capcut.com",
    icon: "✂️"
  },
  {
    id: 20,
    name: "ElevenLabs",
    category: "ai-audio",
    description: "AI语音合成平台，生成自然逼真的人类语音",
    url: "https://elevenlabs.io",
    icon: "🎵"
  },
  {
    id: 21,
    name: "Suno AI",
    category: "ai-audio",
    description: "AI音乐生成工具，根据提示创建原创歌曲",
    url: "https://suno.ai",
    icon: "🎸"
  },
  {
    id: 22,
    name: "Murf AI",
    category: "ai-audio",
    description: "AI语音生成器，用于制作配音和有声读物",
    url: "https://murf.ai",
    icon: "🎙️"
  },
  {
    id: 23,
    name: "Descript",
    category: "ai-audio",
    description: "AI音频编辑平台，支持文字剪辑音频",
    url: "https://www.descript.com",
    icon: "📻"
  },
  {
    id: 24,
    name: "Boomy",
    category: "ai-audio",
    description: "AI音乐创作平台，快速生成原创音乐",
    url: "https://boomy.com",
    icon: "🎹"
  },
  {
    id: 25,
    name: "Adobe Podcast",
    category: "ai-audio",
    description: "AI音频增强工具，提升播客和录音质量",
    url: "https://podcast.adobe.com",
    icon: "🎧"
  },
  {
    id: 26,
    name: "Microsoft Copilot",
    category: "ai-office",
    description: "Microsoft 365的AI助手，增强办公软件功能",
    url: "https://www.microsoft.com/en-us/microsoft-365/copilot",
    icon: "📊"
  },
  {
    id: 27,
    name: "Google Workspace AI",
    category: "ai-office",
    description: "Google办公套件的AI功能，提升文档、表格、演示效率",
    url: "https://workspace.google.com",
    icon: "📈"
  },
  {
    id: 28,
    name: "Notion",
    category: "ai-office",
    description: "All-in-one工作空间，支持AI辅助内容创作",
    url: "https://www.notion.so",
    icon: "📋"
  },
  {
    id: 29,
    name: "Tome",
    category: "ai-office",
    description: "AI演示文稿生成工具，快速创建专业演示",
    url: "https://tome.app",
    icon: "📽️"
  },
  {
    id: 30,
    name: "Gamma",
    category: "ai-office",
    description: "AI生成演示文稿、文档和网页",
    url: "https://gamma.app",
    icon: "🎪"
  },
  {
    id: 31,
    name: "Beautiful.ai",
    category: "ai-office",
    description: "AI智能演示文稿平台，自动美化设计",
    url: "https://www.beautiful.ai",
    icon: "💫"
  },
  {
    id: 32,
    name: "GitHub Copilot",
    category: "ai-coding",
    description: "GitHub和OpenAI合作的AI编程助手，实时代码补全",
    url: "https://github.com/copilot",
    icon: "💻"
  },
  {
    id: 33,
    name: "Cursor",
    category: "ai-coding",
    description: "AI优先的代码编辑器，专注于AI辅助编程",
    url: "https://cursor.so",
    icon: "⌨️"
  },
  {
    id: 34,
    name: "Tabnine",
    category: "ai-coding",
    description: "AI代码补全工具，支持多种编程语言",
    url: "https://www.tabnine.com",
    icon: "🔧"
  },
  {
    id: 35,
    name: "Amazon CodeWhisperer",
    category: "ai-coding",
    description: "AWS的AI编程助手，提供代码建议和安全扫描",
    url: "https://aws.amazon.com/codewhisperer",
    icon: "☁️"
  },
  {
    id: 36,
    name: "Replit Ghostwriter",
    category: "ai-coding",
    description: "Replit的AI编程助手，在线IDE中的智能辅助",
    url: "https://replit.com",
    icon: "👻"
  },
  {
    id: 37,
    name: "Cody",
    category: "ai-coding",
    description: "Sourcegraph的AI编程助手，理解整个代码库",
    url: "https://sourcegraph.com/cody",
    icon: "🦊"
  },
  {
    id: 38,
    name: "Writesonic",
    category: "ai-writing",
    description: "AI内容创作平台，生成博客、广告、社交媒体文案",
    url: "https://writesonic.com",
    icon: "⚡"
  },
  {
    id: 39,
    name: "Perplexity AI",
    category: "ai-writing",
    description: "AI搜索引擎，提供带引用的准确回答",
    url: "https://www.perplexity.ai",
    icon: "🔍"
  },
  {
    id: 40,
    name: "Playground AI",
    category: "ai-painting",
    description: "AI图像生成平台，支持多种模型和风格",
    url: "https://playgroundai.com",
    icon: "🎡"
  },
  {
    id: 41,
    name: "SeaArt AI",
    category: "ai-painting",
    description: "AI绘画平台，提供丰富的模型和社区功能",
    url: "https://www.seaart.ai",
    icon: "🌊"
  },
  {
    id: 42,
    name: "Luma AI",
    category: "ai-video",
    description: "AI视频和3D生成平台",
    url: "https://lumalabs.ai",
    icon: "💎"
  },
  {
    id: 43,
    name: "Bark",
    category: "ai-audio",
    description: "Suno开发的开源AI语音生成模型",
    url: "https://github.com/suno-ai/bark",
    icon: "🐕"
  },
  {
    id: 44,
    name: "Slidesgo AI",
    category: "ai-office",
    description: "AI演示文稿模板和生成工具",
    url: "https://slidesgo.com",
    icon: "🎨"
  },
  {
    id: 45,
    name: "Phind",
    category: "ai-coding",
    description: "AI编程搜索引擎，专门回答技术问题",
    url: "https://www.phind.com",
    icon: "🔎"
  },
  {
    id: 46,
    name: "Magic",
    category: "ai-coding",
    description: "AI编程助手，自动化代码编辑",
    url: "https://magic.dev",
    icon: "🎩"
  }
];

const categories = [
  { id: "all", name: "全部", icon: "📋" },
  { id: "ai-writing", name: "AI写作", icon: "✍️" },
  { id: "ai-painting", name: "AI绘画", icon: "🎨" },
  { id: "ai-video", name: "AI视频", icon: "🎬" },
  { id: "ai-audio", name: "AI音频", icon: "🎵" },
  { id: "ai-office", name: "AI办公", icon: "📊" },
  { id: "ai-coding", name: "AI编程", icon: "💻" }
];
