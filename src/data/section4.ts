export type PairingControl = {
  title: string
  titleLines?: string[]
  description: string
  icon: string
}

export type SectionFourContent = {
  titleLines: string[]
  introduction: string
  controls: PairingControl[]
  guideNote: string
}

const icon = (number: number) => `/assets/section4/icon 4.${number}.svg`

export const sectionFourContent: Record<'en' | 'ar', SectionFourContent> = {
  en: {
    titleLines: ['Family Pairing,', 'only on TikTok'],
    introduction: "Every teen and every family is different. That's why TikTok offers Family Pairing, an easy-to-use tool that allows parents to choose the best experience for their teens, all in a few simple steps.",
    controls: [
      { title: 'Private account', description: 'Set the account to private if their teen has made their account public.', icon: icon(1) },
      { title: 'Block accounts', description: "Block accounts on behalf of their teen. When blocked, teens can't interact with the account or view their content.", icon: icon(2) },
      { title: 'Connections', description: "View who their teen follows and blocks, and who follows their teen's account.", icon: icon(3) },
      { title: 'Managed Topics', titleLines: ['Managed', 'Topics'], description: 'View how their teen has customised their feed using Manage Topics.', icon: icon(4) },
      { title: 'Filter keywords', description: "Create a keyword list to filter content from their teen's feeds.", icon: icon(5) },
      { title: 'Restricted Mode', titleLines: ['Restricted', 'Mode'], description: 'Further limit content that may not be suitable for their teen with Restricted Mode.', icon: icon(6) },
      { title: 'Screen time', description: 'Customise screen time limits by day and get screen time reports. All teens have their screen time preset to 60 minutes.', icon: icon(7) },
      { title: 'Time Away', description: 'Block their teen from accessing TikTok during specific hours of the day.', icon: icon(8) },
      { title: 'STEM feed', titleLines: ['STEM', 'feed'], description: 'Enable the TikTok science, technology, engineering and maths feed. This feature is on by default for teens.', icon: icon(9) },
      { title: 'Activity notifications', titleLines: ['Activity', 'notifications'], description: "Get notifications about their teen's activity, including unlinking, switching accounts and more.", icon: icon(10) },
      { title: 'Publish notifications', titleLines: ['Publish', 'notifications'], description: 'Receive a notification when their teen publishes new content.', icon: icon(11) },
      { title: 'Search', description: 'Restrict their teen from using the search function on TikTok.', icon: icon(12) },
      { title: 'Direct Messaging', titleLines: ['Direct', 'Messaging'], description: 'Restrict who, if anyone, can send direct messages to their teen. DMs are disabled for all teens under 16.', icon: icon(13) },
    ],
    guideNote: "Visit our Guardian's Guide for more information on the tools and controls available to families.",
  },
  ar: {
    titleLines: ['ربط الحسابات للعائلة،', 'حصرياً على تيك توك'],
    introduction: 'كل مراهق وكل عايلة تختلف عن غيرها. وعشان كذا يوفّر تيك توك ميزة "ربط الحسابات للعائلة"، وهي أداة سهلة الاستخدام تتيح لأولياء الأمور اختيار التجربة الأنسب لأبنائهم المراهقين، وكل هذا بخطوات بسيطة.',
    controls: [
      { title: 'حساب خاص', description: 'تفعيل خصوصية الحساب إذا كان المراهق حوّله لحساب عام.', icon: icon(1) },
      { title: 'حظر الحسابات', description: 'حظر حسابات نيابة عن المراهق. وبعد الحظر، ما يقدر المراهق يتفاعل مع هالحساب أو يشوف محتواه.', icon: icon(2) },
      { title: 'الحسابات والمتابعون', description: 'معرفة الحسابات اللي يتابعها المراهق أو حظرها، والحسابات اللي تتابعه.', icon: icon(3) },
      { title: 'إدارة المواضيع', description: 'الاطلاع على كيفية تخصيص المراهق لصفحة "لك" باستخدام ميزة "إدارة المواضيع".', icon: icon(4) },
      { title: 'تصفية الكلمات الرئيسية', titleLines: ['تصفية الكلمات', 'الرئيسية'], description: 'إنشاء قائمة بالكلمات الرئيسية لتصفية المحتوى من صفحات المراهق.', icon: icon(5) },
      { title: 'وضع تقييد المحتوى', description: 'تقييد المحتوى بشكل أكبر إذا كان قد لا يكون مناسباً للمراهق، باستخدام "وضع تقييد المحتوى".', icon: icon(6) },
      { title: 'وقت الشاشة', description: 'تخصيص حدود مدة الاستخدام لكل يوم، والاطلاع على تقارير مدة الاستخدام. وتكون مدة الاستخدام مضبوطة تلقائياً على ٦٠ دقيقة لجميع المراهقين.', icon: icon(7) },
      { title: 'وقت الابتعاد', description: 'منع المراهق من استخدام تيك توك خلال أوقات محددة من اليوم.', icon: icon(8) },
      { title: 'محتوى STEM', description: 'تفعيل صفحة العلوم والتقنية والهندسة والرياضيات على تيك توك. وهالميزة تشتغل تلقائياً للمراهقين.', icon: icon(9) },
      { title: 'إشعارات النشاط', description: 'استلام إشعارات عن نشاط المراهق، مثل إلغاء ربط الحسابات أو تبديل الحسابات وغيرها.', icon: icon(10) },
      { title: 'إشعارات النشر', description: 'استلام إشعار لما ينشر المراهق محتوى جديد.', icon: icon(11) },
      { title: 'البحث', description: 'تقييد استخدام المراهق لميزة البحث على تيك توك.', icon: icon(12) },
      { title: 'الرسائل المباشرة', description: 'تحديد مَن يقدر يرسل رسائل خاصة للمراهق، إن سُمح بذلك. والرسائل الخاصة غير متاحة لجميع المراهقين تحت سن ١٦ عاماً.', icon: icon(13) },
    ],
    guideNote: 'زوروا دليل أولياء الأمور لمعرفة المزيد عن الأدوات وعناصر التحكم المتاحة للعائلات.',
  },
}
