const common = {
  title: 'لوحة موتوماتش',
  breadcrumbs: {
    home: 'الصفحة الرئيسية',
  },
  buttons: {
    getTheCode: 'احصل على الرمز',
    return: 'عودة',
    continue: 'استمرار',
    submit: 'إرسال',
    edit: 'تحرير',
    removeFilters: 'إزالة الفلاتر',
    search: 'بحث',
    close: 'إغلاق',
    logout: 'تسجيل خروج',
    login: 'تسجيل دخول',
    showDetails: 'عرض التفاصيل',
    delete: 'حذف',
    assign: 'تعيين',
    reset: 'إعادة تعيين',
    reject: 'يرفض',
    approve: 'يعتمد',
    approveLabel: 'تحديد الوضع',
    callAI: 'اتصل AI',
    submitOrder: 'تسجيل الطلب',
    approveStatus: 'تأكيد الحالة',
    showUserDetails: 'تفاصيل المستخدم',
    comments: 'تعليقات',
    changePassword: 'تغيير كلمة المرور',
    account: 'ملفي الشخصي',
    copy: 'إنسخ',
    showRequests: 'عرض الطلبات',
  },
  fields: {
    mobileNumber: 'رقم الجوال',
    code: 'الرمز',
    password: 'كلمة المرور',
    username: 'اسم المستخدم',
  },
  messages: {
    toast: {
      defaultError: 'حدث خطأ!',
      permissionError: 'خطأ في الصلاحيات!',
      tokenExpired: 'انتهت صلاحية الرمز!',
      copied: 'تم النسخ!',
    },
    notFound: 'هذه الصفحة غير موجودة!',
    noRowFound: 'لا يوجد صف لعرضه!',
  },
  tooltips: {
    changeLanguage: 'تغيير اللغة',
  },
  layout: {
    footer: 'نص التذييل',
  },
  confirmAlert: {
    areYouSure: 'هل أنت متأكد؟',
    buttons: {
      yes: 'نعم',
      no: 'لا',
    },
  },

  columns: {
    rowNumber: 'رقم',
    operations: 'العمليات',
    name: 'الاسم',
    description: 'الوصف',
    userFirstName: 'الاسم الأول للمستخدم',
    userLastName: 'الاسم الأخير للمستخدم',
    userNationality: 'جنسية المستخدم',
    userPhoneNumber: 'رقم هاتف المستخدم',
    userEmail: 'بريد إلكتروني للمستخدم',
    assignedTo: 'مخصص لـ',
    id: 'الرقم التعريفي',
    title: 'العنوان',
    status: 'الحالة',
    create_date: 'تاريخ الإنشاء',
    last_modify_date: 'تاريخ التعديل الأخير',
    role_name: 'اسم الدور',
    viewDetails: 'تفاصيل',
    firstName: 'الاسم الأول',
    lastName: 'الاسم الأخير',
  },

  contractStatus: {
    New: 'جديد',
    Approved: 'موافق عليه',
    Rejected: 'مرفوض',
    Expired: 'منتهي الصلاحية',
    Blocked: 'محظور',
  },
  kycStatus: {
    PersonalInfoConfirmed: 'تم تأكيد المعلومات الشخصية',
    CompanyInfoConfirmed: 'تم تأكيد معلومات الشركة',
    BankAccountInfoConfirmed: 'تم تأكيد معلومات الحساب البنكي',
    ContactInfoConfirmed: 'تم تأكيد معلومات الاتصال',
    NationalCardConfirmed: 'تم تأكيد البطاقة الوطنية',
    IdentityCardConfirmed: 'تم تأكيد بطاقة الهوية',
    VatDocumentConfirmed: 'تم تأكيد مستند ضريبة القيمة المضافة',
    NewsPaperDocumentConfirmed: 'تم تأكيد مستند الصحيفة',
  },
  verifyStatus: {
    UnVerify: 'غير مؤكد',
    Pending: 'قيد الانتظار',
    Failed: 'فشل',
    Verified: 'تم التحقق',
  },
  registerMedium: {
    Wati: 'واتي',
    Manual: 'يدوي',
    Panel: 'لوحة التحكم',
    Respond: 'الرد',
  },

  userStatus: {
    Registering: 'قيد التسجيل',
    PendingConfirmation: 'في انتظار التأكيد',
    InReview: 'قيد المراجعة',
    KycError: 'خطأ في KYC',
    Confirmed: 'مؤكد',
    Rejected: 'مرفوض',
    Blocked: 'محظور',
  },

  step: {
    Start: 'البدء',
    GetName: 'الحصول على الاسم',
    GetCompanyName: 'الحصول على اسم الشركة',
    GetNumber: 'الحصول على الرقم',
    GetLocation: 'الحصول على الموقع',
    GetBrands: 'الحصول على العلامات التجارية',
    GetCategories: 'الحصول على الفئات',
    FinalRegistering: 'التسجيل النهائي',
  },

  gender: {
    male: 'ذكر',
    female: 'أنثى',
    unknown: 'غير معروف',
  },

  userType: {
    Customer: 'عميل',
    Supplier: 'مورد',
    Admin: 'مسؤول',
    SuperAdmin: 'مسؤول فائق',
    Support: 'دعم',
    Service: 'خدمة',
    Logistic: 'لوجستيك',
  },

  booleans: {
    true: 'نعم',
    false: 'لا',
  },

  uploadFile: {
    message: 'اسحب وأفلت بعض الملفات هنا، أو انقر لتحديد الملفات',
    buttonTitle: 'اختر الملفات',
    errorWrongType: 'نوع الملف غير صالح',
    errorMaxSize: 'الملف كبير جدًا. الحد الأقصى لحجم الملف هو: ',
  },

  currencyType: {
    rial: 'ریال',
    toman: 'تومان',
    dollar: 'دلار',
    euro: 'یورو',
  },
};

export default common;
