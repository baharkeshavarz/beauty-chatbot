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
  dashboard,
  account,
};

export default pages;
