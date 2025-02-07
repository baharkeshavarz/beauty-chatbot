const loginOtp = {
  oneTimePassword: 'كلمة المرور لمرة واحدة',
  passwordSentToMobile: 'تم إرسال الكود إلى رقم الجوال',
};

const login = {
  remember_me: 'تذكرني',
};

const home = {
  title: 'عنوان الصفحة الرئيسية',
};

const menu = {
  dashboard: 'لوحة التحكم',
};

const dashboard = {
  reports: 'التقارير',
  requestsReport: 'تقرير الطلبات',
  ordersReport: 'تقرير الطلبات الشرائية',
  info: {
    requestCount: 'إجمالي عدد الطلبات',
    ordersCount: 'إجمالي عدد الطلبات الشرائية',
    customersCount: 'إجمالي عدد العملاء',
    suppliersCount: 'إجمالي عدد الموردين',
    recentOrders: 'الطلبات الأخيرة',
    recentTransactions: 'المعاملات الأخيرة',
  },
  types: {
    report_daily: 'يومي',
    report_monthly: 'شهري',
  },
};

const account = {
  columns: {},
  buttons: {},
  tabs: {},
  details: {},
  fields: {
    old_password: 'كلمة المرور الحالية',
    new_password: 'كلمة المرور الجديدة',
    confirm_new_password: 'تأكيد كلمة المرور الجديدة',
  },
  accordions: {},
  header: {},
  messages: {
    changePasswordSuccessfully: 'تم تغيير كلمة المرور بنجاح!',
    passwordMatchError: 'كلمة المرور وتأكيدها غير متطابقين',
  },
};

const pages = {
  loginOtp,
  login,
  home,
  menu,
  dashboard,
  account,
};

export default pages;
