export type FactCardContent = {
  number: string
  title: string
  titleLines?: [string, string]
  description: string
  icon?: string
}

export type SectionOneContent = {
  title: string
  introduction: string
  cards: FactCardContent[]
}

const icons = {
  age: '/assets/section1/icon 1.1.svg',
  feed: '/assets/section1/icon 1.2.svg',
  wellbeing: '/assets/section1/icon 1.3.svg',
  partnership: '/assets/section1/icon 1.4.svg',
}

export const sectionOneContent: Record<'en' | 'ar', SectionOneContent> = {
  en: {
    title: '10 ways TikTok protects the safety and privacy of teens',
    introduction: 'Teen accounts on TikTok have more than 50 preset safety, privacy, and security features and settings automatically turned on, so teens can safely express their creativity, connect with friends, and learn on TikTok.',
    cards: [
      {
        number: '01',
        title: 'Safer by design',
        description: 'Teens grow up at different ages and stages, and acknowledging this, we use technology to limit the content and features that are available to them. This makes sure that the experience we offer is suitable for all teens.',
      },
      {
        number: '02',
        title: 'Limited access to some features',
        titleLines: ['Limited access', 'to some features'],
        description: 'We limit the features available to teens. For example, direct messaging is only available from 16+, while going LIVE, TikTok Shop, and Gifts are restricted to 18+.',
      },
      {
        number: '03',
        title: 'Age assurance',
        description: "Those under 13 aren't allowed on TikTok. On average, we suspend 6 million accounts each month because we suspect they belong to someone under 13.",
        icon: icons.age,
      },
      {
        number: '04',
        title: 'Community Guidelines',
        titleLines: ['Community', 'Guidelines'],
        description: 'We remove content and accounts that violate our Community Guidelines. People can easily report content in-app by long-pressing on a piece of content and tapping report. We also regularly publish updates on our safety efforts in our Transparency Centre.',
      },
      {
        number: '05',
        title: 'A tailored For You feed',
        titleLines: ['A tailored', 'For You feed'],
        description: 'We restrict content that may not be appropriate for teens, and prevent videos with potentially negative themes from being repeatedly recommended in the For You feed.',
        icon: icons.feed,
      },
      {
        number: '06',
        title: 'Family Pairing, only on TikTok',
        titleLines: ['Family Pairing,', 'only on TikTok'],
        description: "Every family is different, and our Family Pairing tool gives parents and guardians the ability to customise their teens' content, privacy, and well-being settings. It's easy to use and can be set up with just a few clicks.",
      },
      {
        number: '07',
        title: 'Time and Well-being',
        titleLines: ['Time and', 'Well-being'],
        description: 'Our Time and Well-being space brings together screen time tools, Well-being Missions - short, fun tasks to reinforce mindful behaviours - and experiences to unwind with.',
        icon: icons.wellbeing,
      },
      {
        number: '08',
        title: 'Screen time management',
        titleLines: ['Screen time', 'management'],
        description: 'Teen accounts on TikTok have their screen time preset to 60 minutes. We also encourage balanced habits with wind-down reminders, a guided meditation from 10pm, and by muting notifications for teens overnight.',
      },
      {
        number: '09',
        title: 'Teen education',
        description: "Our Teen Safety Centre is designed to help younger people understand the different features and safety tools available on TikTok. Designed in partnership with our Youth Council, it includes interactive elements to test teens' knowledge of online safety.",
      },
      {
        number: '10',
        title: 'Partnering for success',
        titleLines: ['Partnering for', 'success'],
        description: 'We partner with global organisations such as WePROTECT Global Alliance, Internet Watch Foundation, and the Technology Coalition to address emerging risks and share best practices across the industry.',
        icon: icons.partnership,
      },
    ],
  },
  ar: {
    title: 'طرق يحمي بها تيك توك سلامة المراهقين وخصوصيتهم',
    introduction: 'حسابات المراهقين على تيك توك فيها أكثر من ٥٠ ميزة وإعداد للأمان والخصوصية والحماية، مفعّلة تلقائياً، عشان يقدرون المراهقين يعبّرون عن إبداعهم بأمان، ويتواصلون مع أصدقائهم، ويتعلمون من خلال المنصة.',
    cards: [
      {
        number: '01',
        title: 'مصمم ليكون أكثر أماناً',
        description: 'المراهقون يكبرون بأعمار ومراحل مختلفة، وحنا نراعي هالشي، ونستخدم التقنية عشان نحدد المحتوى والميزات المتاحة لهم وهذا يضمن إن التجربة اللي نقدمها تناسب كل المراهقين.',
      },
      {
        number: '02',
        title: 'وصول محدود لبعض الميزات',
        description: 'نحدد الميزات المتاحة للمراهقين مثلاً، الرسائل الخاصة متاحة بس من عمر ١٦ سنة وفوق، بينما البث المباشر ومتجر تيك توك والهدايا مقتصرة على عمر ١٨ سنة وفوق.',
      },
      {
        number: '03',
        title: 'التحقق من العمر',
        description: 'اللي أعمارهم تحت ١٣ سنة غير مسموح لهم يستخدمون تيك توك. وبالمعدل، نوقف ٦ ملايين حساب كل شهر لأننا نشك إنها لأشخاص تحت الـ ١٣ سنة.',
        icon: icons.age,
      },
      {
        number: '04',
        title: 'إرشادات المجتمع',
        description: 'نحذف المحتوى والحسابات اللي تخالف إرشادات مجتمعنا ويقدر أي شخص يبلّغ عن المحتوى بسهولة من داخل التطبيق، عن طريق الضغط المطوّل على الفيديو واختيار "إبلاغ" وننشر بشكل دوري تحديثات عن جهودنا في مجال السلامة في مركز الشفافية التابع لنا.',
      },
      {
        number: '05',
        title: 'صفحة "لك" تناسب اهتماماتك',
        description: 'نقيّد المحتوى اللي يمكن ما يناسب المراهقين، ونمنع تكرار توصية مقاطع فيها مواضيع سلبية محتملة في قسم "لك".',
        icon: icons.feed,
      },
      {
        number: '06',
        title: 'ربط الحسابات للعائلة، حصرياً على تيك توك',
        titleLines: ['ربط الحسابات للعائلة،', 'حصرياً على تيك توك'],
        description: 'كل عايلة تختلف عن غيرها، وأداة ربط الحسابات للعائلة عندنا تعطي أولياء الأمور والأوصياء القدرة على تخصيص إعدادات المحتوى والخصوصية والرفاهية لأبنائهم المراهقين. سهلة الاستخدام، ويمكن إعدادها بخطوات بسيطة.',
      },
      {
        number: '07',
        title: 'الوقت والرفاهية',
        description: 'مساحة "الوقت والرفاهية" عندنا تجمع بين أدوات وقت الشاشة، ومهام الرفاهية، وهي مهام قصيرة وممتعة تعزز السلوكيات الواعية وتجارب للاسترخاء.',
        icon: icons.wellbeing,
      },
      {
        number: '08',
        title: 'إدارة وقت الشاشة',
        description: 'حسابات المراهقين على تيك توك مضبوط لها وقت شاشة تلقائياً على ٦٠ دقيقة ونشجع بعد على عادات متوازنة عن طريق تذكيرات الاستعداد للنوم، وجلسة تأمل موجهة ابتداءً من الساعة ١٠ مساءً، وكتم الإشعارات للمراهقين طول الليل.',
      },
      {
        number: '09',
        title: 'توعية المراهقين',
        description: 'مركز سلامة المراهقين مصمم عشان يساعد المراهقين على فهم مختلف الميزات وأدوات السلامة المتوفرة في تيك توك وتم تصميمه بالشراكة مع مجلس الشباب عندنا، ويحتوي على عناصر تفاعلية تختبر معرفة المراهقين بالسلامة على الإنترنت.',
      },
      {
        number: '10',
        title: 'تبادل أفضل الممارسات',
        description: 'نشتغل مع منظمات عالمية مثل تحالف WePROTECT العالمي، ومؤسسة مراقبة الإنترنت (Internet Watch Foundation)، وتحالف التقنية (Technology Coalition)، عشان نتصدى للمخاطر الجديدة ونتشارك أفضل الممارسات على مستوى القطاع.',
        icon: icons.partnership,
      },
    ],
  },
}
