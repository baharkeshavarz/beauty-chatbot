import AdminLogistic from 'src/pages/AdminLogistic/AdminLogistic';

const loginOtp = {
  oneTimePassword: 'کد یکبار مصرف',
  passwordSentToMobile: 'کد به شماره موبایل ارسال شد',
};

const login = {
  remember_me: 'مرا به خاطر بسپار',
};

const home = {
  title: 'عنوان صفحه اصلی',
};

const menu = {
  dashboard: 'داشبورد',
  requests: 'درخواست‌ها',
  myRequests: 'درخواست‌های من',
  myBatchRequests: 'درخواست‌های عمده من',
  adminRequests: 'درخواست‌های مدیر',
  userManagement: 'مدیریت کاربران',
  administrators: 'مدیران',
  roles: 'نقش‌ها',
  createBatchRequest: 'ایجاد درخواست عمده',
  orders: 'سفارشات',
  adminSuppliers: 'تامین‌کنندگان',
  adminCustomers: 'مشتریان',
  adminBatchRequests: 'درخواست‌های عمده',
  addNewRequest: 'ثبت درخواست جدید',
  adminLogistics: 'لاجستیک',
  myAccount: 'حساب کاربری من',
};

const BulkRequestSteps = {
  upload: 'بارگذاری',
  preview: 'پیش‌نمایش',
  final: 'نهایی',
  uploadExcel: 'بارگذاری فایل اکسل',
  excel: 'اکسل',
  caution: 'احتیاط',
  fileSize: '- اندازه فایل نباید بیشتر از ۲۰ مگابایت باشد',
  rowLimit: '- فایل اکسل شما باید شامل کمتر از ۱۰۰۰ ردیف باشد',
  headerColumns: '- تمام ستون‌ها باید هدر داشته باشند',
  requestName: 'نام درخواست',
  submit: 'ارسال',
  copyClipboardSuccessful: 'کپی به کلیپ بورد با موفقیت انجام شد!',
  rowsImportedSuccessfully: 'ردیف‌ها با موفقیت وارد شدند',
  rowsHasError: 'ردیف‌ها دارای خطا هستند',
  copyToClipboard: 'کپی به کلیپ بورد',
  trackingCode: 'کد رهگیری',
  downloadSampleFile: 'دانلود فایل نمونه اکسل',
  brand: 'برند',
  partNumber: 'شماره قطعه',
  description: 'توضیحات',
  quantity: 'تعداد',
  adminSuppliers: 'تامین‌کنندگان',
  adminCustomers: 'مشتریان',
  adminAutoLogin: 'ورود خودکار',
  excelUploadedSuccessfully: 'فایل اکسل با موفقیت بارگذاری شد!',
  excelSubmittedSuccessfully: 'فایل اکسل با موفقیت ارسال شد!',
  back: 'بازگشت',
};

const PendingRequests = {
  select: 'انتخاب',
  factorNumber: 'شماره فاکتور',
  paymentId: 'شناسه پرداخت',
  amount: 'مقدار',
  paymentFile: 'فایل پرداخت',
  factorFile: 'فایل فاکتور',
  description: 'توضیحات',
  uploadFile: 'بارگذاری فایل',
  uploadPayment: 'بارگذاری فایل پرداخت',
  uploadFactorFile: 'بارگذاری فایل فاکتور',
  registerRequestDetail: 'ثبت جزئیات درخواست',
  paymentOrder: 'سفارش پرداخت',
  supplyOrder: 'سفارش تامین',
  logisticOrder: 'سفارش لجستیک',
  deliverOrder: 'سفارش تحویل',
  finalizeOrder: 'نهایی کردن سفارش',
  comment: 'توضیحات',
  toPayment: ' تایید پرداخت',
  toLogistic: 'به تایید لجستیک ',
  toDelivery: 'به تایید تحویل',
  toFinalize: 'به نهایی کردن',
  paymentSubmittedSuccessfully: 'درخواست پرداخت با موفقیت ارسال شد!',
  logisticSubmittedSuccessfully: 'درخواست لجستیک با موفقیت ارسال شد!',
  deliverSubmittedSuccessfully: 'درخواست تحویل با موفقیت ارسال شد!',
  finalizSubmittedSuccessfully: 'درخواست نهایی با موفقیت ارسال شد!',
  cancelledSuccessfully: 'با موفقیت لغو شد!',
  supplySubmittedSuccessfully: 'درخواست تامین با موفقیت ارسال شد!',
  orderId: 'شناسه سفارش',
  userId: 'شناسه کاربر',
  invoiceId: 'شناسه فاکتور',
  invoiceFile: 'فایل فاکتور',
  receiptFile: 'فایل رسید',
  trackingCode: 'کد رهگیری',
  paymentStatus: 'وضعیت پرداخت',
  status: 'وضعیت',
  vatAmount: 'مقدار مالیات بر ارزش افزوده',
  totalAmount: 'جمع کل ',
  canceled: 'لغو شده',
  delivered: 'تحویل شده',
  finalized: 'نهایی شده',
  inLogistic: 'در انتظار تحویل سفارش',
  inSupply: 'در انتظار تایید تامین کننده',
  pending: 'در انتظار',
  pendingStatus: 'در انتظار تایید پرداخت',
  paid: 'پرداخت شده',
  fromAmount: 'از مقدار',
  toAmount: 'به مقدار',
  from_create_date: 'از تاریخ ایجاد',
  to_create_date: 'به تاریخ ایجاد',
  cancelOrder: 'لغو سفارش',
  cancelPayment: 'لغو پرداخت',
  OrderHasAlreadyCanceled: 'سفارش مورد نظر لغو شده است',
  receiveDate: 'تاریخ تحویل',
  supplyDate: 'تاریخ تامین',
};

const FinalRequest = {
  supplyDate: 'تاریخ تامین',
  sendDate: 'تاریخ ارسال',
  address: 'آدرس',
  description: 'توضیحات',
  supplierId: '',
  destinationAddress: 'آدرس',
  destinationPostalCode: 'کدپستی',
  destinationPhoneNumber: 'شماره تماس',
  addressInfo: 'آدرس ارسال کالا',
};

const requests = {
  columns: {
    user_id: 'شناسه کاربر',
    type: 'نوع',
    brand: 'برند',
    model: 'مدل',
    year: 'سال',
    tracking_code: 'کد رهگیری',
    request_type: 'نوع درخواست',
    status: 'وضعیت',
    part_number: 'شماره قطعه',
    category: 'دسته‌بندی',
    description: 'توضیحات',
    manufacturer: 'تولیدکننده',
    requestType: 'نوع درخواست',
    part_number_detail: {
      applications: 'کاربردها',
      key_features: 'ویژگی‌های کلیدی',
      name: 'نام',
      support_models: 'مدل‌های پشتیبانی شده',
      relevance: 'محصولات مرتبط',
    },
    user_info: 'کاربر',
    candidate_suppliers: 'تامین‌کنندگان',
    quantity: 'تعداد',
  },
  buttons: {
    addRequest: 'افزودن درخواست',
    activate: 'فعال‌سازی',
    deactivate: 'غیرفعال‌سازی',
    approve: 'تایید درخواست',
    supplyInfo: 'اطلاعات تامین',
    editRequest: 'ویرایش اطلاعات درخواست',
    approveAndSubmit: 'تایید و ثبت سفارش',
  },
  status: {
    initial: 'اولیه',
    pendingForAiApprovalByAdmin: 'در انتظار تایید AI ادمین',
    pendingForAiApprovalByUser: 'تایید AI کاربر',
    pendingForSupplyInfoByAdmin: 'تامین کالا',
    pendingForApproveSupplyInfoByUser: 'تایید اطلاعات تامین توسط کاربر',
  },
  adminRequestStatus: {
    initial: 'اولیه',
    inDetection: 'در حال تشخیص',
    pendingForApprovalDetectionByAdmin: 'در انتظار تایید AI توسط مدیر',
    approveAiDetectionByAdmin: 'تایید AI توسط مدیر',
    rejectAiDetectionByAdmin: 'رد AI توسط مدیر',
    approveAiDetectionByUser: 'تایید AI توسط کاربر',
    rejectAiDetectionByUser: 'رد AI توسط کاربر',
    approveSupplyByAdmin: 'تایید تامین توسط مدیر',
    rejectSupplyByAdmin: 'رد تامین توسط مدیر',
    approveSupplyByUser: 'تایید تامین توسط کاربر',
    rejectSupplyByUser: 'رد تامین توسط کاربر',
    resolvedAndPlaceOrder: 'ثبت سفارش شده',
    closed: 'بسته شده',
  },
  requestType: {
    buy: 'خرید',
    inquiry: 'استعلام',
  },
  batchRequestType: {
    open: 'در حال انجام',
    close: 'بسته',
  },
  requestDetail: 'جزئیات درخواست',
  requestStatus: 'وضعیت درخواست',
  tabs: {
    mainInformation: 'اطلاعات اصلی',
    partInformation: 'اطلاعات قطعه',
    detectionResult: 'نتیجه تشخیص',
  },

  details: {
    is_enabled: 'فعال است',
    colors: 'رنگ‌ها',
    countries: 'کشورها',
    model: 'مدل‌ها',
    parts: 'قطعات',
    years: 'سال‌ها',
    tags: 'برچسب‌ها',
  },

  fields: {
    request_id: 'شناسه درخواست',
    tracking_code: 'کد رهگیری',
    mobile: 'موبایل',
    full_name: 'نام کامل',
    user_id: 'شناسه کاربر',
    part_number: 'شماره قطعه',
    request_type: 'نوع درخواست',
    status: 'وضعیت',
    from_create_date: 'از تاریخ ایجاد',
    to_create_date: 'به تاریخ ایجاد',
    from_finalize_date: 'از تاریخ نهایی',
    to_finalize_date: 'به تاریخ نهایی',
  },

  accordions: {
    advanceFilters: 'فیلترهای پیشرفته',
  },
  messages: {
    changedSuccessfully: 'وضعیت درخواست با موفقیت تغییر یافت.',
    changedFailed: 'مشکلی در تغییر وضعیت درخواست پیش آمد!',
    editRequestSuccessfully: 'درخواست با موفقیت به‌روزرسانی شد.',
    editRequestFailed: 'مشکلی در به‌روزرسانی درخواست پیش آمد!',
    addSupplierSuccessfully: 'اطلاعات تامین درخواست با موفقیت اضافه شد.',
    addSupplierFailed: 'مشکلی در افزودن درخواست تامین پیش آمد!',
    submitOrderSuccessfully: 'سفارش شما با موفقیت ثبت گردید',
    submitOrderFailed: 'خطایی در ثبت سفارش شما پیش آمده است',
    approveSupplierFirst: 'لطفا ابتدا اطلاعات تامین را تکمیل نمایید',
    approveAIRequest:
      'اطلاعات AI توسط شما تایید گردید. پس از تامین کالا توسط ادمین، سفارش خود را نهایی نمایید',
    selectCandidateSuccessfully: 'کاندیداهای منتخب انتخاب شد',
    selectCandidateFailed: 'مشکلی در انتخاب  تامین کننده منتخب  پیش آمد!',
  },
};

const adminUsers = {
  buttons: {
    addAdmin: 'افزودن کاربر مدیر',
  },
  fields: {
    name: 'نام کامل',
    first_name: 'نام',
    last_name: 'نام خانوادگی',
    email: 'ایمیل',
    sur_name: 'نام خانوادگی',
    father_name: 'نام پدر',
    username: 'نام کاربری',
    password: 'رمز عبور',
    confirm_password: 'تأیید رمز عبور',
    gender: 'جنسیت',
  },
  columns: {
    admin_user_id: 'شناسه کاربر مدیر',
    user_id: 'شناسه کاربر',
    first_name: 'نام',
    last_name: 'نام خانوادگی',
    mobile: 'موبایل',
    phone_number: 'شماره تلفن',
    user_is_enabled: 'کاربر فعال است',
    user_name: 'نام کاربری',
    whats_app_number: 'شماره واتس اپ',
    contract_status: 'وضعیت قرارداد',
    kyc_status: 'وضعیت KYC',
    verify_status: 'وضعیت تأیید',
    register_medium: 'رسانه ثبت‌نام',
    types: 'انواع',
    status: 'وضعیت',
    step: 'مرحله',
    userType: 'نوع کاربر',
    group: 'گروه',
    name: 'نام',
    hasPrivilege: 'دارد امتیاز',
  },
  details: {
    title: 'جزئیات کاربر مدیر',
    user: 'جزئیات کاربر',
  },
  tabs: {
    roles: 'نقش‌ها',
    user: 'کاربر',
    privileges: 'امتیازات',
  },
  messages: {
    addPrivilege: 'امتیاز با موفقیت اضافه شد',
  },
};

const roles = {
  columns: {
    role_id: 'شناسه نقش',
    role_name: 'نام نقش',
    privileges: 'امتیازات نقش',
    type: 'نوع',
    is_default: 'آیا پیش‌فرض است؟',
  },
  fields: {
    role_name: 'عنوان نقش',
    is_default: 'آیا پیش‌فرض است؟',
    type: 'نوع',
  },
  buttons: {
    addRole: 'افزودن نقش',
    editRole: 'ویرایش نقش',
    assignablePrivilege: 'امتیاز قابل تخصیص',
    assignedPrivilege: 'امتیاز تخصیص یافته',
  },
  details: {
    title: 'جزئیات نقش کاربر',
  },
  tabs: {
    privilege: 'امتیازات',
    user: 'کاربر',
  },
};

const suppliers = {
  columns: {
    supplier_id: 'شناسه تامین‌کننده',
    phone_number: 'شماره تلفن',
    company_name: 'نام شرکت',
    address: 'آدرس',
    user_id: 'شناسه کاربر',
    create_date: 'تاریخ ایجاد',
    phoneNumbers: 'شماره تلفن ها',
  },
  buttons: {},
  tabs: {},
  details: {
    addNew: 'افزودن جدید',
    suppliersList: 'لیست تامین کنندگان',
    candidateSuppliers: 'تامین کنندگان منتخب',
  },
  fields: {
    supplier_id: 'شناسه تامین‌کننده',
    companyName: 'نام شرکت',
    address: 'آدرس',
    user_id: 'شناسه کاربر',
    create_date: 'تاریخ ایجاد',
    userName: 'نام کاربری',
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    phoneNumber: 'شماره تلفن',
    brand: 'برند',
    detect_brands: 'برندهای پشتیابی شده',
    inventory_description: 'توضیحات',
  },
  accordions: {
    advanceFilters: 'فیلترهای پیشرفته',
  },
  header: {
    addSupplier: 'افزودن تامین‌کننده',
    editSupplier: 'ویرایش تامین‌کننده',
  },
  messages: {
    addSupplierSuccessfully: 'تامین کننده با موفقیت ثبت گردید',
    editSupplierSuccessfully: 'تامین کننده با موفقیت ویرایش شد',
    noSupplierFound: 'هیچ تامین کننده ای پیدا نشد!',
    maxPercentage: 'درصد تامین‌کننده باید کمتر از 100 باشد',
  },
  supplierStatusType: {
    unknown: 'نامشخص',
    initial: 'اولیه',
    supplierInquery: 'ارسال درخواست',
    done: 'انجام شده',
    rejected: 'رد شده',
  },
};

const customers = {
  columns: {
    customer_id: 'شناسه مشتری',
    phone_number: 'شماره تلفن',
    location: 'مکان',
    user_id: 'شناسه کاربر',
    create_date: 'تاریخ ایجاد',
    auto_login: 'ورود خودکار',
  },
  buttons: {
    areYouSureStart: 'آیا می‌خواهید با کاربر وارد شوید',
    areYouSureEnd: '?',
  },
  details: {
    addNew: 'افزودن مشتری جدید',
    editCustomer: 'ویرایش مشتری',
  },
  tabs: {},
  fields: {
    customer_id: 'شناسه مشتری',
    phone_number: 'شماره تلفن',
    location: 'مکان',
    user_id: 'شناسه کاربر',
    step: 'مرحله',
    type: 'نوع',
    verifyStatus: 'وضعیت تأیید',
    registerMedium: 'رسانه ثبت‌نام',
    contractStatus: 'وضعیت قرارداد',
    category: 'دسته‌بندی',
    model: 'مدل',
    brand: 'برند',
    address: 'آدرس',
    userName: 'نام کاربری',
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    phoneNumber: 'شماره تلفن',
  },
  header: {
    addCustomer: 'افزودن مشتری',
  },
  accordions: {
    advanceFilters: 'فیلترهای پیشرفته',
  },
  messages: {
    addCustomerSuccessfully: 'مشتری با موفقیت ثبت گردید',
    editCustomerSuccessfully: 'مشتری با موفقیت ویرایش شد',
  },
};

const supply = {
  columns: {
    supplier: 'شناسه تامین‌کننده',
    currency: 'واحد پول',
    price: 'قیمت',
    deliveryDate: 'تاریخ تحویل',
    deliveryPlace: 'محل تحویل',
  },
  buttons: {},
  tabs: {},
  details: {
    supplierInfo: 'اطلاعات تامین‌کننده',
  },
  fields: {
    supplier_id: 'تامین‌کننده',
    currency: 'واحد پول',
    amount: 'قیمت',
    percentage: 'اضافه بها(درصد)',
    addressDescription: 'آدرس',
    deliveryDate: 'تاریخ تحویل',
  },
  accordions: {
    advanceFilters: 'فیلترهای پیشرفته',
  },
};

const order = {
  messages: {
    selectAtLeastOneCheckbox: 'لطفا حداقل یک گزینه را انتخاب نمایید.',
  },
  showOrderStatus: 'نمایش وضعیت سفارش',
  orderStatus: 'وضعیت سفارش',
  tabs: {
    mainInformation: 'اطلاعات سفارش',
    paymentInformation: 'اطلاعات پرداخت سفارش',
    cancelPaymentInformation: 'اطلاعات لغو پرداخت سفارش',
  },
};

const dashboard = {
  reports: 'گزارشات ',
  requestsReport: 'گزارش درخواست ها',
  ordersReport: 'گزارش سفارش ها',
  info: {
    requestCount: 'تعداد کل درخواست ها',
    ordersCount: 'تعداد کل سفارش ها',
    customersCount: 'تعداد کل مشتریان',
    suppliersCount: 'تعداد کل تامین کنندگان',
    recentOrders: 'سفارشات اخیر',
    recentTransactions: 'تراکنش های اخیر',
  },
  types: {
    report_daily: 'روزانه',
    report_monthly: 'ماهانه',
  },
};

const logistics = {
  columns: {
    logistic_id: 'شناسه لجستیک',
    phone_number: 'شماره تلفن',
    address: 'آدرس',
    user_id: 'شناسه کاربر',
    create_date: 'تاریخ ایجاد',
    phoneNumbers: 'شماره‌های تلفن',
  },
  buttons: {},
  tabs: {},
  details: {
    addNew: 'افزودن جدید',
    logisticSelection: 'انتخاب لجستیک',
  },
  fields: {
    logistic_id: 'شناسه لجستیک',
    address: 'آدرس',
    user_id: 'شناسه کاربر',
    create_date: 'تاریخ ایجاد',
    userName: 'نام کاربری',
    firstName: 'نام',
    lastName: 'نام خانوادگی',
    phoneNumber: 'شماره تلفن',
  },
  accordions: {
    advanceFilters: 'فیلترهای پیشرفته',
  },
  header: {
    addLogistic: 'افزودن لجستیک',
    editLogistic: 'ویرایش لجستیک',
  },
  messages: {
    addLogisticSuccessfully: 'لجستیک با موفقیت ارسال شد!',
    editLogisticSuccessfully: 'لجستیک با موفقیت به‌روزرسانی شد!',
  },
};

const account = {
  columns: {},
  buttons: {},
  tabs: {},
  details: {},
  fields: {
    old_password: 'رمز عبور فعلی',
    new_password: 'رمز عبور جدید',
    confirm_new_password: 'تکرار رمز عبور جدید',
  },
  accordions: {},
  header: {},
  messages: {
    changePasswordSuccessfully: 'پسورد با موفقیت تغییر کرد!',
    passwordMatchError: 'رمز عبور و تکرار آن برابر نیستند',
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
  order,
  dashboard,
  logistics,
  account,
};

export default pages;
