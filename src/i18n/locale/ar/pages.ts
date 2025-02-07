const loginOtp = {
  oneTimePassword: 'كلمة مرور لمرة واحدة',
  passwordSentToMobile: 'تم إرسال كلمة المرور إلى',
};

const login = {
  remember_me: 'تذكرني',
};

const home = {
  title: 'عنوان الصفحة الرئيسية',
};

const menu = {
  dashboard: 'لوحة القيادة',
  requests: 'الطلبات',
  myRequests: 'طلباتى',
  myBatchRequests: 'طلبيات الدفعة الخاصة بي',
  adminRequests: 'طلبات الإدارة',
  userManagement: 'إدارة المستخدمين',
  administrators: 'المسؤولون',
  roles: 'الأدوار',
  createBatchRequest: 'إنشاء طلب دفعة',
  orders: 'الطلبات',
  adminSuppliers: 'الموردون',
  adminCustomers: 'العملاء',
  adminBatchRequests: 'طلبات الدفعة',
  addNewRequest: 'إضافة طلب جديد',
  adminLogistics: 'اللوجستية',
  myAccount: 'حسابي',
};

const BulkRequestSteps = {
  upload: 'رفع',
  preview: 'معاينة',
  final: 'نهائي',
  uploadExcel: 'رفع ملف إكسل',
  excel: 'إكسل',
  caution: 'تحذير',
  fileSize: '- يجب ألا يتجاوز حجم الملف 20 ميغابايت',
  rowLimit: '- يجب أن يحتوي ملف إكسل الخاص بك على أقل من 1000 صف',
  headerColumns: '- يجب أن تحتوي جميع الأعمدة على رأس',
  requestName: 'اسم الطلب',
  submit: 'إرسال',
  copyClipboardSuccessful: 'تم نسخ إلى الحافظة بنجاح!',
  rowsImportedSuccessfully: 'تم استيراد الصفوف بنجاح',
  rowsHasError: 'الصفوف بها خطأ',
  copyToClipboard: 'نسخ إلى الحافظة',
  trackingCode: 'رمز التتبع',
  downloadSampleFile: 'تحميل ملف إكسل عينة',
  brand: 'علامة تجارية',
  partNumber: 'رقم الجزء',
  description: 'وصف',
  quantity: 'كمية',
  adminSuppliers: 'الموردون',
  adminCustomers: 'العملاء',
  adminAutoLogin: 'تسجيل دخول تلقائي',
  excelUploadedSuccessfully: 'تم رفع ملف الإكسل بنجاح!',
  excelSubmittedSuccessfully: 'تم تقديم ملف الإكسل بنجاح!',
  back: 'عودة',
};

const PendingRequests = {
  select: 'اختر',
  factorNumber: 'رقم الفاتورة',
  paymentId: 'رقم الدفع',
  amount: 'المبلغ',
  paymentFile: 'ملف الدفع',
  factorFile: 'ملف الفاتورة',
  description: 'وصف',
  uploadFile: 'رفع ملف',
  uploadPayment: 'رفع ملف الدفع',
  uploadFactorFile: 'رفع ملف الفاتورة',
  registerRequestDetail: 'تسجيل تفاصيل الطلب',
  paymentOrder: 'طلب الدفع',
  supplyOrder: 'طلب التوريد',
  logisticOrder: 'طلب لوجستي',
  deliverOrder: 'طلب تسليم',
  finalizeOrder: 'إتمام الطلب',
  comment: 'تعليق',
  toPayment: 'إلى الدفع',
  toLogistic: 'إلى الموافقة اللوجستية',
  toDelivery: 'إلى الموافقة على التسليم',
  toFinalize: 'إلى الإنهاء',
  paymentSubmittedSuccessfully: 'تم تقديم طلب الدفع بنجاح!',
  logisticSubmittedSuccessfully: 'تم تقديم الطلب اللوجستي بنجاح!',
  deliverSubmittedSuccessfully: 'تم تقديم طلب التسليم بنجاح!',
  finalizSubmittedSuccessfully: 'تم تقديم طلب الإنهاء بنجاح!',
  cancelledSuccessfully: 'تم الإلغاء بنجاح!',
  supplySubmittedSuccessfully: 'تم تقديم الطلب بنجاح!',
  orderId: 'رقم الطلب',
  userId: 'رقم المستخدم',
  invoiceId: 'رقم الفاتورة',
  invoiceFile: 'ملف الفاتورة',
  receiptFile: 'ملف الإيصال',
  trackingCode: 'رمز التتبع',
  paymentStatus: 'حالة الدفع',
  status: 'الحالة',
  vatAmount: 'مبلغ ضريبة القيمة المضافة',
  totalAmount: 'المبلغ الإجمالي',
  canceled: 'ملغى',
  delivered: 'تم التسليم',
  finalized: 'مكتمل',
  inLogistic: 'انتظار الاستلام',
  inSupply: 'انتظار للمورد',
  pending: 'معلق',
  paid: 'مدفوع',
  fromAmount: 'من المبلغ',
  toAmount: 'إلى المبلغ',
  from_create_date: 'من تاريخ الإنشاء',
  to_create_date: 'إلى تاريخ الإنشاء',
  cancelOrder: 'إلغاء الطلب',
  cancelPayment: 'إلغاء الدفع',
  pendingStatus: 'في انتظار الدفع',
};

const FinalRequest = {
  supplyDate: 'تاريخ التوريد',
  sendDate: 'تاريخ الإرسال',
  address: 'العنوان',
  description: 'الوصف',
  destinationAddress: 'عنوان',
  destinationPostalCode: 'الرمز البريدي',
  destinationPhoneNumber: 'رقم الاتصال',
  addressInfo: 'معلومات العنوان',
};

const requests = {
  columns: {
    user_id: 'معرف المستخدم',
    type: 'النوع',
    brand: 'العلامة التجارية',
    model: 'الموديل',
    year: 'السنة',
    tracking_code: 'رمز التتبع',
    request_type: 'نوع الطلب',
    status: 'الحالة',
    part_number: 'رقم الجزء',
    category: 'الفئة',
    description: 'الوصف',
    manufacturer: 'الشركة المصنعة',
    requestType: 'نوع الطلب',
    part_number_detail: {
      applications: 'التطبيقات',
      key_features: 'الميزات الرئيسية',
      name: 'الاسم',
      support_models: 'النماذج المدعومة',
    },
    user_info: 'المستخدم',
    candidate_suppliers: 'الموردون',
    quantity: 'كمية',
  },
  buttons: {
    addRequest: 'إضافة طلب',
    activate: 'تفعيل',
    deactivate: 'إلغاء التفعيل',
    approve: 'الموافقة على الطلب',
    supplyInfo: 'معلومات التوريد',
    editRequest: 'تعديل المعلومات',
  },
  status: {
    initial: 'مبدئي',
    pendingForAiApprovalByAdmin: 'Pending For AI Approval By Admin',
    pendingForAiApprovalByUser: 'Pending For AI Approval By User',
    pendingForSupplyInfoByAdmin: 'Pending For Supply By Admin',
    pendingForApproveSupplyInfoByUser: 'Pending For Approve Supply By User',
    // pendingForApproval: 'في انتظار الموافقة',
    // approval: 'الموافقة',
    // broadCastToSuppliers: 'بث إلى الموردين',
    // waitForResponses: 'انتظر الردود',
    // resolved: 'تم الحل',
    // closed: 'مغلق',
    // rejected: 'مرفوض',
  },
  adminRequestStatus: {
    initial: 'مبدئي',
    inDetection: 'في الكشف',
    pendingForApprovalDetectionByAdmin:
      'في انتظار الموافقة على الذكاء الاصطناعي من قبل المدير',
    approveAiDetectionByAdmin: 'الموافقة على الذكاء الاصطناعي من قبل المدير',
    rejectAiDetectionByAdmin: 'رفض الذكاء الاصطناعي من قبل المدير',
    approveAiDetectionByUser: 'الموافقة على الذكاء الاصطناعي من قبل المستخدم',
    rejectAiDetectionByUser: 'رفض الذكاء الاصطناعي من قبل المستخدم',
    approveSupplyByAdmin: 'الموافقة على التوريد من قبل المدير',
    rejectSupplyByAdmin: 'رفض التوريد من قبل المدير',
    approveSupplyByUser: 'الموافقة على التوريد من قبل المستخدم',
    rejectSupplyByUser: 'رفض التوريد من قبل المستخدم',
    resolvedAndPlaceOrder: 'تم الحل وتقديم الطلب',
    closed: 'مغلق',
  },
  requestType: {
    buy: 'شراء',
    inquiry: 'استفسار',
  },
  batchRequestType: {
    open: 'يفتح',
    close: 'يغلق',
  },
  requestDetail: 'تفاصيل الطلب',
  requestStatus: 'حالة الطلب',
  tabs: {
    mainInformation: 'المعلومات الرئيسية',
    partInformation: 'معلومات الجزء',
    detectionResult: 'نتيجة الكشف',
  },

  details: {
    is_enabled: 'مفعل',
    colors: 'الألوان',
    countries: 'الدول',
    model: 'النماذج',
    parts: 'الأجزاء',
    years: 'السنوات',
    tags: 'العلامات',
  },

  fields: {
    request_id: 'معرف الطلب',
    tracking_code: 'رمز التتبع',
    mobile: 'موبايل',
    full_name: 'الاسم الكامل',
    user_id: 'معرف المستخدم',
    part_number: 'رقم الجزء',
    request_type: 'نوع الطلب',
    status: 'الحالة',
    from_create_date: 'من تاريخ الإنشاء',
    to_create_date: 'إلى تاريخ الإنشاء',
    from_finalize_date: 'من تاريخ الإنهاء',
    to_finalize_date: 'إلى تاريخ الإنهاء',
  },

  accordions: {
    advanceFilters: 'فلاتر متقدمة',
  },
  messages: {
    changedSuccessfully: 'تم تغيير حالة الطلب بنجاح.',
    changedFailed: 'حدث خطأ في تغيير حالة الطلب!',
    editRequestSuccessfully: 'تم تحديث الطلب بنجاح.',
    editRequestFailed: 'حدث خطأ في تحديث الطلب!',
    addSupplierSuccessfully: 'تمت إضافة معلومات توريد الطلب بنجاح.',
    addSupplierFailed: 'حدث خطأ في إضافة طلب التوريد!',
    submitOrderSuccessfully: 'لقد تم إنشاء طلبك بنجاح.',
    submitOrderFailed: 'حدث خطأ ما أثناء إنشاء الطلب.',
    approveAIRequest:
      'لقد تمت الموافقة على معلومات الذكاء الاصطناعي بواسطتك. بعد أن يتم توفير البضائع من قبل المشرف، قم بتأكيد طلبك.',
    selectCandidateSuccessfully: 'حدد المرشح بنجاح',
    selectCandidateFailed: 'فشل اختيار المرشح!',
  },
};

const adminUsers = {
  buttons: {
    addAdmin: 'إضافة مستخدم إداري',
  },
  fields: {
    name: 'الاسم الكامل',
    first_name: 'الاسم الأول',
    last_name: 'الاسم الأخير',
    email: 'البريد الإلكتروني',
    sur_name: 'اسم العائلة',
    father_name: 'اسم الأب',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    confirm_password: 'تأكيد كلمة المرور',
    gender: 'الجنس',
  },
  columns: {
    admin_user_id: 'معرف المستخدم الإداري',
    user_id: 'معرف المستخدم',
    first_name: 'الاسم الأول',
    last_name: 'الاسم الأخير',
    mobile: 'الموبايل',
    phone_number: 'رقم الهاتف',
    user_is_enabled: 'المستخدم مفعل',
    user_name: 'اسم المستخدم',
    whats_app_number: 'رقم واتس آب',
    contract_status: 'حالة العقد',
    kyc_status: 'حالة KYC',
    verify_status: 'حالة التحقق',
    register_medium: 'وسيلة التسجيل',
    types: 'الأنواع',
    status: 'الحالة',
    step: 'الخطوة',
    userType: 'نوع المستخدم',
    group: 'المجموعة',
    name: 'الاسم',
    hasPrivilege: 'لديه امتياز',
  },
  details: {
    title: 'تفاصيل المستخدم الإداري',
    user: 'تفاصيل المستخدم',
  },
  tabs: {
    roles: 'الأدوار',
    user: 'المستخدم',
    privileges: 'الامتيازات',
  },
  messages: {
    addPrivilege: 'تمت إضافة الامتياز بنجاح',
  },
};

const roles = {
  columns: {
    role_id: 'معرف الدور',
    role_name: 'اسم الدور',
    privileges: 'امتيازات الدور',
    type: 'النوع',
    is_default: 'هل هو افتراضي؟',
  },
  fields: {
    role_name: 'عنوان الدور',
    is_default: 'هل هو افتراضي؟',
    type: 'النوع',
  },
  buttons: {
    addRole: 'إضافة دور',
    editRole: 'تعديل الدور',
    assignablePrivilege: 'امتياز قابل للتخصيص',
    assignedPrivilege: 'امتياز مخصص',
  },
  details: {
    title: 'تفاصيل دور المستخدم',
  },
  tabs: {
    privilege: 'الامتيازات',
    user: 'المستخدم',
  },
};

const suppliers = {
  columns: {
    supplier_id: 'معرف المورد',
    phone_number: 'رقم الهاتف',
    company_name: 'اسم الشركة',
    address: 'العنوان',
    user_id: 'معرف المستخدم',
    create_date: 'تاريخ الإنشاء',
    phoneNumbers: 'ارقام الهاتف',
  },
  buttons: {},
  tabs: {},
  details: {
    addNew: 'إضافة جديد',
    suppliersList: 'قائمة الموردين',
    candidateSuppliers: 'الموردون المرشحون',
  },
  fields: {
    supplier_id: 'معرف المورد',
    companyName: 'اسم الشركة',
    address: 'العنوان',
    user_id: 'معرف المستخدم',
    create_date: 'تاريخ الإنشاء',
    userName: 'اسم المستخدم',
    firstName: 'الاسم الأول',
    lastName: 'الاسم الأخير',
    phoneNumber: 'رقم الهاتف',
    brand: 'ماركة',
    detect_brands: 'العلامات التجارية المدعومة',
    inventory_description: 'وصف',
  },
  accordions: {
    advanceFilters: 'فلاتر متقدمة',
  },
  header: {
    addSupplier: 'إضافة مورد',
    editSupplier: 'تحرير المورد',
  },
  messages: {
    addSupplierSuccessfully: 'تم تقديم المورد بنجاح!',
    editSupplierSuccessfully: 'تم تحديث المورد بنجاح!',
    noSupplierFound: 'لم يتم العثور على مورد!',
    maxPercentage: 'يجب أن يكون الحد الأقصى للمتر أو 100 قدمًا',
  },
  supplierStatusType: {
    unknown: 'مجهول',
    initial: 'أولي',
    supplierInquery: 'استعلام عن المورد',
    done: 'منتهي',
    rejected: 'مرفوض',
  },
};

const customers = {
  columns: {
    customer_id: 'معرف العميل',
    phone_number: 'رقم الهاتف',
    location: 'الموقع',
    user_id: 'معرف المستخدم',
    create_date: 'تاريخ الإنشاء',
    auto_login: 'تسجيل دخول تلقائي',
  },
  buttons: {
    areYouSureStart: 'هل تريد تسجيل الدخول كمستخدم',
    areYouSureEnd: '?',
  },
  details: {
    addNew: 'إضافة جديد',
    editCustomer: 'تحرير العميل',
  },
  tabs: {},
  fields: {
    customer_id: 'معرف العميل',
    phone_number: 'رقم الهاتف',
    location: 'الموقع',
    user_id: 'معرف المستخدم',
    step: 'الخطوة',
    type: 'النوع',
    verifyStatus: 'حالة التحقق',
    registerMedium: 'وسيلة التسجيل',
    contractStatus: 'حالة العقد',
    category: 'الفئة',
    model: 'الموديل',
    brand: 'العلامة التجارية',
    address: 'العنوان',
    userName: 'اسم المستخدم',
    firstName: 'الاسم الأول',
    lastName: 'الاسم الأخير',
    phoneNumber: 'رقم الهاتف',
  },
  header: {
    addCustomer: 'إضافة عميل',
  },
  accordions: {
    advanceFilters: 'فلاتر متقدمة',
  },
  messages: {
    addCustomerSuccessfully: 'تم تسجيل المزيد بسجل موفق',
    editCustomerSuccessfully: 'مشتريات موفقة',
  },
};

const supply = {
  columns: {
    supplier: 'معرف المورد',
    currency: 'العملة',
    price: 'سعر',
    deliveryDate: 'تاريخ التسليم او الوصول',
    deliveryPlace: 'مكان التسليم',
  },
  buttons: {},
  tabs: {},
  details: {
    supplierInfo: 'معلومات المورد',
  },
  fields: {
    supplier_id: 'المورد',
    currency: 'العملة',
    amount: 'السعر الإجمالي',
    percentage: 'العلامات (النسبة المئوية)',
    addressDescription: 'عنوان',
    deliveryDate: 'تاريخ التسليم او الوصول',
  },
  accordions: {
    advanceFilters: 'فلاتر متقدمة',
  },
};

const dashboard = {
  reports: 'التقارير السنوية',
  requestsReport: 'تقارير الطلبات',
  ordersReport: 'تقارير الطلبات',
  info: {
    requestCount: 'إجمالي عدد الطلبات',
    ordersCount: 'إجمالي عدد الطلبات',
    customersCount: 'إجمالي عدد العملاء',
    suppliersCount: 'إجمالي عدد الموردين',
    recentOrders: 'الطلبات الأخيرة',
    recentTransactions: 'المعاملات الأخيرة',
  },
  types: {
    report_daily: 'يوميًا',
    report_monthly: 'شهريا',
  },
};

const logistics = {
  columns: {
    logistic_id: 'معرف اللوجستيك',
    phone_number: 'رقم الهاتف',
    address: 'العنوان',
    user_id: 'معرف المستخدم',
    create_date: 'تاريخ الإنشاء',
    phoneNumbers: 'أرقام الهاتف',
  },
  buttons: {},
  tabs: {},
  details: {
    addNew: 'إضافة جديد',
    logisticSelection: 'اختر جوستیک',
  },
  fields: {
    logistic_id: 'معرف اللوجستيك',
    address: 'العنوان',
    user_id: 'معرف المستخدم',
    create_date: 'تاريخ الإنشاء',
    userName: 'اسم المستخدم',
    firstName: 'الاسم الأول',
    lastName: 'الاسم الأخير',
    phoneNumber: 'رقم الهاتف',
  },
  accordions: {
    advanceFilters: 'الفلاتر المتقدمة',
  },
  header: {
    addLogistic: 'إضافة لوجستيك',
    editLogistic: 'تعديل لوجستيك',
  },
  messages: {
    addLogisticSuccessfully: 'تم إرسال اللوجستيك بنجاح!',
    editLogisticSuccessfully: 'تم تحديث اللوجستيك بنجاح!',
  },
};

const account = {
  columns: {},
  buttons: {},
  tabs: {},
  details: {},
  fields: {
    old_password: 'كلمة المرور القديمة',
    new_password: 'كلمة المرور الجديدة',
    confirm_new_password: 'تأكيد كلمة المرور الجديدة',
  },
  accordions: {},
  header: {},
  messages: {
    changePasswordSuccessfully: 'Password has changed successfully!',
    passwordMatchError: 'لا يلزم وجود رمز العبور والتخلص منه',
  },
};

const order = {
  messages: {
    selectAtLeastOneCheckbox: 'يرجى عدم اختيار أي خيار على الأقل.',
  },
  showOrderStatus: 'عرض حالة الطلب',
  orderStatus: 'حالة الطلب',
  tabs: {
    mainInformation: 'معلومات الطلب',
    paymentInformation: 'معلومات الدفع للطلب',
    cancelPaymentInformation: 'معلومات إلغاء الطلب ',
  },
};

const pages = {
  loginOtp,
  login,
  home,
  menu,
  requests,
  adminUsers,
  roles,
  BulkRequestSteps,
  suppliers,
  customers,
  PendingRequests,
  FinalRequest,
  supply,
  dashboard,
  logistics,
  account,
  order,
};

export default pages;
