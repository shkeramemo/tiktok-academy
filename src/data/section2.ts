export type SectionTwoCard = {
  title: string
  icon: string
  paragraphs: string[]
  bullets?: string[]
}

export type SectionTwoContent = {
  titleLines: string[]
  introduction: string[]
  cards: SectionTwoCard[]
}

export const sectionTwoContent: Record<'en' | 'ar', SectionTwoContent> = {
  en: {
    titleLines: ["TikTok's zero-tolerance", 'approach to child exploitation', 'and abuse'],
    introduction: [
      "Child sexual exploitation and abuse is abhorrent and not tolerated on TikTok. Any content that depicts abuse, harm, exploitation, or endangerment of minors is a violation of our Community Guidelines. We're taking decisive steps to prevent new incidents of exploitation and end ongoing abuse.",
      'Our dedicated Child Safety Team, who specialise in the identification of child sexual exploitation and abuse, includes those with backgrounds in law enforcement.',
    ],
    cards: [
      {
        title: 'Detecting CSAM',
        icon: '/assets/section2/icon 2.1.svg',
        paragraphs: [
          'We use multiple technologies to identify child sexual abuse material (CSAM):',
          'With our partners, we have built shared hash databases – hubs of unique digital codes that have been linked to known CSAM.',
        ],
        bullets: ["Microsoft’s PhotoDNA", "Google’s Content Safety API", "YouTube’s CSAI Match", "TikTok’s own hash-matching systems"],
      },
      {
        title: 'Eliminating CSAM',
        icon: '/assets/section2/icon 2.4.svg',
        paragraphs: [
          'We automatically block known CSAM from being uploaded to TikTok, and remove new or suspected CSAM immediately when identified.',
          'We permanently ban accounts that attempt to share this material. We also take aggressive action against accounts and content that share information on where to find CSAM online.',
        ],
      },
      {
        title: 'Reporting CSAM',
        icon: '/assets/section2/icon 2.2.svg',
        paragraphs: [
          'When we detect CSAM, we file a report to the National Center for Missing & Exploited Children (NCMEC).',
          'These reports help law enforcement agencies find people who create or share CSAM.',
        ],
      },
      {
        title: 'Stronger together',
        icon: '/assets/section2/icon 2.3.svg',
        paragraphs: [
          'We work with a network of global partners – including child safety advocates, civil society, and law enforcement – to identify, implement and, critically, share innovative solutions to better protect children online.',
        ],
      },
    ],
  },
  ar: {
    titleLines: ['نهج تيك توك الصارم في مكافحة استغلال الأطفال', 'مكافحة مواد الاعتداء الجنسي على الأطفال (CSAM)'],
    introduction: [
      'استغلال الأطفال والاعتداء الجنسي عليهم أمر مرفوض تماماً، ولا نتسامح معه أبداً في تيك توك. أي محتوى يصوّر إساءة للقاصرين أو إيذاءهم أو استغلالهم أو تعريضهم للخطر يُعتبر مخالفة صريحة لإرشادات مجتمعنا. وحنا نتخذ خطوات حاسمة عشان نمنع وقوع حالات استغلال جديدة، ونوقف أي إساءة مستمرة.',
      'فريق سلامة الأطفال المتخصص عندنا، واللي يختص برصد حالات استغلال الأطفال والاعتداء الجنسي عليهم، يضم كوادر من ذوي الخبرة في مجال إنفاذ القانون.',
    ],
    cards: [
      {
        title: 'رصد مواد الاعتداء الجنسي على الأطفال (CSAM)',
        icon: '/assets/section2/icon 2.1.svg',
        paragraphs: [
          'نستخدم تقنيات متعددة عشان نرصد مواد الاعتداء الجنسي على الأطفال (CSAM)، ومنها:',
          'وبالتعاون مع شركائنا، أنشأنا قواعد بيانات مشتركة للبصمات الرقمية، تجمع رموزاً رقمية فريدة مرتبطة بمواد معروفة للاعتداء الجنسي على الأطفال.',
        ],
        bullets: [
          'تقنية PhotoDNA من مايكروسوفت',
          'واجهة Content Safety API من جوجل',
          'تقنية CSAI Match من يوتيوب',
          'أنظمة تيك توك الخاصة لمطابقة البصمات الرقمية (hash-matching)',
        ],
      },
      {
        title: 'إزالة مواد الاعتداء الجنسي على الأطفال (CSAM)',
        icon: '/assets/section2/icon 2.4.svg',
        paragraphs: [
          'نمنع تلقائياً رفع أي مواد معروفة للاعتداء الجنسي على الأطفال على تيك توك، ونحذف فوراً أي مواد جديدة أو مشتبه فيها بمجرد رصدها.',
          'ونحظر بشكل دائم أي حساب يحاول مشاركة هذا النوع من المحتوى، ونتخذ إجراءات صارمة ضد الحسابات والمحتوى اللي يشارك معلومات عن أماكن العثور على هذه المواد على الإنترنت.',
        ],
      },
      {
        title: 'الإبلاغ عن مواد الاعتداء الجنسي على الأطفال (CSAM)',
        icon: '/assets/section2/icon 2.2.svg',
        paragraphs: [
          'لما نرصد مواد اعتداء جنسي على الأطفال، نرفع بلاغاً فوراً إلى المركز الوطني للأطفال المفقودين والمُستغَلين (NCMEC).',
          'وتساعد هذي البلاغات جهات إنفاذ القانون في الوصول إلى الأشخاص اللي ينشئون هذا النوع من المحتوى أو يشاركونه.',
        ],
      },
      {
        title: 'سوا أقوى',
        icon: '/assets/section2/icon 2.3.svg',
        paragraphs: [
          'نشتغل مع شبكة من الشركاء حول العالم، ومنهم جهات مختصة بحماية الأطفال، ومنظمات المجتمع المدني، وجهات إنفاذ القانون، عشان نحدد حلولاً مبتكرة ونطبقها، والأهم إننا نتشاركها عشان نوفر حماية أفضل للأطفال على الإنترنت.',
          'تقدر تعرف أكثر في مركز الشفافية حقنا',
        ],
      },
    ],
  },
}
