export type WellbeingBullet = { label?: string; text: string }

export type WellbeingCardContent = {
  title: string
  icon: string
  introduction: string
  bullets?: WellbeingBullet[]
  closing?: string
}

export type SectionThreeContent = {
  titleLines: string[]
  introduction: string[]
  cards: WellbeingCardContent[]
}

export const sectionThreeContent: Record<'en' | 'ar', SectionThreeContent> = {
  en: {
    titleLines: ['Digital well-being', 'on TikTok'],
    introduction: [
      'On average, 30 million people globally visit our Time and Well-being space each week to discover our screen time tools, and explore a wide range of resources designed to support their digital well-being.',
      'To help even more people discover these tools and resources, we promote the Time and Well-being space at key moments, such as when someone reaches their daily screen time limit, when Sleep Hours is active, and underneath our Take A Break videos.',
    ],
    cards: [
      {
        title: 'Managing screen time',
        icon: '/assets/section3/icon 3.1.svg',
        introduction: 'TikTok’s screen time tools encourage balanced digital habits.',
        bullets: [
          { label: 'Screen time limits', text: 'Set daily screen time limits, customisable by the day of the week.' },
          { label: 'Sleep Hours', text: 'Mute notifications at night and schedule a guided meditation that pauses the For You feed experience.' },
          { label: 'Screen time breaks', text: 'Schedule a reminder after a certain amount of uninterrupted screen time.' },
          { label: 'Screen time dashboard', text: 'Review insights about how much time they spend on TikTok.' },
        ],
      },
      {
        title: 'Pause and Reset experiences',
        icon: '/assets/section3/icon 3.2.svg',
        introduction: 'Shaped by expert health research, the Time and Well-being space offers industry-first features to help people reflect and recharge in meaningful ways.',
        bullets: [
          { label: 'Affirmation journal', text: 'Lets people set an intention for the day, with 120+ affirmation cards to inspire them.' },
          { label: 'Breathing exercises', text: 'Anytime access to different types of guided breathing exercises.' },
          { label: 'Soothing sounds', text: 'A curated selection of popular calming sounds, such as rain or white noise.' },
        ],
      },
      {
        title: 'Well-being Missions',
        icon: '/assets/section3/icon 3.3.svg',
        introduction: 'Grounded in academic insights, Well-being Missions are short, fun tasks designed to help our community use technology with greater purpose and confidence.',
        closing: 'As people complete missions, they earn badges that encourage and reinforce mindful behaviours.',
      },
      {
        title: 'Well-being tips from creators',
        icon: '/assets/section3/icon 3.4.svg',
        introduction: 'We’ve worked with TikTok creators to develop practical well-being tips to share with our community.',
        closing: 'Featured in the Time and Well-being space, these videos explore topics such as building a feed that feels right for you, and taking a more mindful approach to screen time, sleep, and self-worth.',
      },
    ],
  },
  ar: {
    titleLines: ['الرفاهية الرقمية', 'على تيك توك'],
    introduction: [
      'بالمعدل، فيه ٣٠ مليون شخص حول العالم يزورون قسم "الوقت والرفاهية" عندنا كل أسبوع، عشان يكتشفون أدوات وقت الشاشة، ويشوفون مجموعة واسعة من المصادر المصممة عشان تدعم رفاهيتهم الرقمية.',
      'وعشان نساعد ناس أكثر يكتشفون الأدوات والمصادر هذي، بنروّج لقسم "الوقت والرفاهية" في أوقات مهمة، مثل أول ما يوصل الشخص لحده اليومي من وقت الشاشة، أو لما يشتغل تنبيه وقت النوم، وتلقونها بعد تحت فيديوهات "خذ بريك" (Take A Break).',
    ],
    cards: [
      {
        title: 'إدارة وقت الشاشة',
        icon: '/assets/section3/icon 3.1.svg',
        introduction: 'أدوات وقت الشاشة في تيك توك تشجع على عادات رقمية متوازنة.',
        bullets: [
          { text: 'حدود وقت الشاشة: تحط حدود يومية لوقت الشاشة، وتقدر تخصصها على حسب كل يوم في الأسبوع.' },
          { text: 'ساعات النوم: تكتم الإشعارات بالليل وتجدول تذكير النوم عشان يوقف لك قسم "لك".' },
          { text: 'فترات راحة من وقت الشاشة: تجدول تذكير ينبهك بعد ما تقضي وقت محدد متواصل على الشاشة.' },
          { text: 'لوحة تحكم وقت الشاشة: تراجع فيها معلومات وتفاصيل عن الوقت اللي تقضيه على تيك توك.' },
        ],
      },
      {
        title: 'تجارب التوقف وإعادة الضبط',
        icon: '/assets/section3/icon 3.2.svg',
        introduction: 'قسم "الوقت والرفاهية" تم تصميمه بناءً على أبحاث صحية من خبراء، وبيقدم ميزات هي الأولى من نوعها في قطاع التقنية عشان يساعد الناس يتأملون ويشحنون طاقتهم بطرق مفيدة.',
        bullets: [
          { text: 'التوكيدات اليومية: يخلي الناس يحددون هدفهم لليوم، مع أكثر من ١٢٠ بطاقة توكيد تلهمهم.' },
          { text: 'تمارين التنفس: الوصول في أي وقت لأنواع مختلفة من تمارين التنفس الموجهة.' },
          { text: 'أصوات مهدئة: تشكيلة مختارة من الأصوات الهادية والمحبوبة، مثل صوت المطر أو الضجيج الأبيض (White Noise).' },
        ],
      },
      {
        title: 'مهام الرفاهية',
        icon: '/assets/section3/icon 3.3.svg',
        introduction: 'مهام الرفاهية مبنية على أفكار ودراسات أكاديمية، وهي عبارة عن مهام قصيرة وممتعة مصممة عشان تساعد مجتمعنا يستخدم التقنية بهدف ووعي وثقة أكبر.',
        closing: 'وكل ما يخلص المستخدمين مهام أكثر، يكسبون شارات (بادجات) تشجعهم وتدعم عندهم السلوكيات الواعية.',
      },
      {
        title: 'نصائح الرفاهية من صناع المحتوى',
        icon: '/assets/section3/icon 3.4.svg',
        introduction: 'اشتغلنا مع صناع محتوى في تيك توك عشان نطور نصائح رفاهية عملية ونشاركها مع مجتمعنا.',
        closing: 'والفيديوهات هذي موجودة في قسم "الوقت والرفاهية"، وتناقش مواضيع مثل كيف تبني محتوى متابعة يناسبك ويريحك، وتتبع أسلوب واعي أكثر تجاه وقت الشاشة والنوم وتقدير الذات.',
      },
    ],
  },
}
