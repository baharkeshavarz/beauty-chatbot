const loginOtp = {
  oneTimePassword: 'One-Time Password',
  passwordSentToMobile: 'Code sent to mobile number',
};

const login = {
  remember_me: 'Remember Me',
};

const home = {
  title: 'Home Page Title',
};

const menu = {
  dashboard: 'Dashboard',
};

const dashboard = {
  reports: 'Reports',
  requestsReport: 'Requests Report',
  ordersReport: 'Orders Report',
  info: {
    requestCount: 'Total Requests',
    ordersCount: 'Total Orders',
    customersCount: 'Total Customers',
    suppliersCount: 'Total Suppliers',
    recentOrders: 'Recent Orders',
    recentTransactions: 'Recent Transactions',
  },
  types: {
    report_daily: 'Daily',
    report_monthly: 'Monthly',
  },
};

const account = {
  columns: {},
  buttons: {},
  tabs: {},
  details: {},
  fields: {
    old_password: 'Current Password',
    new_password: 'New Password',
    confirm_new_password: 'Confirm New Password',
  },
  accordions: {},
  header: {},
  messages: {
    changePasswordSuccessfully: 'Password changed successfully!',
    passwordMatchError: 'Password and confirmation do not match',
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
