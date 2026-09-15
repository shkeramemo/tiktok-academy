export type ProtectionRow = {
  label: string
  ages13to15: string
  ages16to17: string
  ages18plus: string
}

export type SectionFiveContent = {
  titleLines: string[]
  introduction: string
  rows: ProtectionRow[]
}

export const sectionFiveContent: Record<'en' | 'ar', SectionFiveContent> = {
  en: {
    titleLines: ['Safety and privacy protections', 'for teens on TikTok'],
    introduction: "Teen accounts on TikTok have more than 50 preset safety, privacy, and security features and settings automatically turned on, so teens can safely express their creativity, connect with friends, and learn on TikTok. Here's a snapshot of some of those limits, which differ based on how old a teen is.",
    rows: [
      { label: 'Account privacy', ages13to15: 'Preset to Private', ages16to17: 'Preset to Private', ages18plus: 'Public' },
      { label: 'Eligible for For You feed', ages13to15: 'Not eligible', ages16to17: 'Eligible', ages18plus: 'Eligible' },
      { label: 'Comment rules', ages13to15: 'Only friends can comment', ages16to17: 'Preset to Followers', ages18plus: 'Everyone' },
      { label: 'Video downloads', ages13to15: 'Not allowed', ages16to17: 'Preset to off', ages18plus: 'Allowed' },
      { label: 'Duet and Stitch', ages13to15: 'Not allowed', ages16to17: 'Preset to off', ages18plus: 'Allowed' },
      { label: 'Preset daily screen time', ages13to15: '60 minutes', ages16to17: '60 minutes', ages18plus: 'Personal choice' },
      { label: 'Push notifications', ages13to15: 'Disabled from 9pm', ages16to17: 'Disabled from 10pm', ages18plus: 'Personal choice' },
      { label: 'Nighttime meditation', ages13to15: '10pm – 6am', ages16to17: '10pm – 6am', ages18plus: 'Personal choice' },
      { label: 'Direct messaging', ages13to15: 'Not allowed', ages16to17: 'Preset to off', ages18plus: 'Preset to Friends' },
      { label: 'Going LIVE', ages13to15: 'Not allowed', ages16to17: 'Not allowed', ages18plus: 'Allowed' },
      { label: 'Virtual gifting', ages13to15: 'Not allowed', ages16to17: 'Not allowed', ages18plus: 'Personal choice' },
    ],
  },
  ar: {
    titleLines: ['حماية أمان وخصوصية', 'المراهقين على تيك توك'],
    introduction: 'حسابات المراهقين على تيك توك فيها أكثر من ٥٠ ميزة وإعداد مسبق للأمان والخصوصية والحماية، وتكون مفعّلة تلقائياً، عشان يقدر المراهقون يعبّرون عن إبداعهم بأمان، ويتواصلون مع أصدقائهم، ويتعلمون على تيك توك. وهذي لمحة عن بعض هالإعدادات والحدود، واللي تختلف حسب عمر المراهق:',
    rows: [
      { label: 'خصوصية الحساب', ages13to15: 'خاص تلقائياً', ages16to17: 'خاص تلقائياً', ages18plus: 'عام' },
      { label: 'مؤهل لمحتوى "لك"', ages13to15: 'غير مؤهل', ages16to17: 'مؤهل', ages18plus: 'مؤهل' },
      { label: 'قواعد التعليق', ages13to15: 'الأصدقاء فقط', ages16to17: 'المتابعون تلقائياً', ages18plus: 'الجميع' },
      { label: 'تنزيل الفيديوهات', ages13to15: 'غير مسموح', ages16to17: 'متوقف تلقائياً', ages18plus: 'مسموح' },
      { label: 'ميزات "الثنائي" و"الدمج"', ages13to15: 'غير مسموح', ages16to17: 'متوقف تلقائياً', ages18plus: 'مسموح' },
      { label: 'مدة الاستخدام اليومية', ages13to15: '60 دقيقة', ages16to17: '60 دقيقة', ages18plus: 'خيار شخصي' },
      { label: 'الإشعارات الفورية', ages13to15: 'متوقفة من 9 مساءً', ages16to17: 'متوقفة من 10 مساءً', ages18plus: 'خيار شخصي' },
      { label: 'تذكير النوم', ages13to15: 'من 10 مساءً إلى 6 صباحاً', ages16to17: 'من 10 مساءً إلى 6 صباحاً', ages18plus: 'خيار شخصي' },
      { label: 'الرسائل المباشرة', ages13to15: 'غير مسموح', ages16to17: 'متوقفة تلقائياً', ages18plus: 'الأصدقاء تلقائياً' },
      { label: 'البث المباشر', ages13to15: 'غير مسموح', ages16to17: 'غير مسموح', ages18plus: 'مسموح' },
      { label: 'الهدايا الافتراضية', ages13to15: 'غير مسموح', ages16to17: 'غير مسموح', ages18plus: 'خيار شخصي' },
    ],
  },
}
