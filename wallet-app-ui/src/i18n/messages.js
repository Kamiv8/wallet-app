import { defineMessages } from 'react-intl';

const messages = defineMessages({
  //region Test
  hello: {
    id: 'hello',
    defaultMessage: 'hello',
  },
  empty: {
    id: 'empty',
    defaultMessage: '',
  },
  //endregion
  //region Atom Elements
  selectResetOption: {
    id: 'selectResetOption',
    defaultMessage: 'Reset',
  },
  //endregion
  //region Register page
  username: {
    id: 'registerPageUsername',
    defaultMessage: 'Username',
  },
  email: {
    id: 'registerPageEmail',
    defaultMessage: 'Email',
  },
  password: {
    id: 'registerPagePassword',
    defaultMessage: 'Password',
  },
  confirmPassword: {
    id: `registerPageConfirmPassword`,
    defaultMessage: 'Confirm password',
  },
  icon: {
    id: `registerPageIcon`,
    defaultMessage: 'Icon',
  },
  redirectLogin: {
    id: `registerPageRedirectLogin`,
    defaultMessage: 'If you have an account, click here',
  },
  register: {
    id: `registerPageRegister`,
    defaultMessage: 'Register',
  },
  //endregion
  //region Login Page
  loginUsername: {
    id: 'loginPageUsername',
    defaultMessage: 'Username',
  },
  loginPassword: {
    id: 'loginPagePassword',
    defaultMessage: 'Password',
  },
  loginLogin: {
    id: 'loginPageLogin',
    defaultMessage: 'Log in',
  },
  loginRedirectRegister: {
    id: 'loginPageRedirectRegister',
    defaultMessage: "You don't have an account, click here?",
  },
  loginReset: {
    id: 'loginPageReset',
    defaultMessage: 'Reset password?',
  },
  //endregion
  //region Navigation modal page
  navigationPage: {
    id: 'navigationPageNavigation',
    defaultMessage: 'NAVIGATION',
  },
  navigationHistory: {
    id: 'navigationHistory',
    defaultMessage: 'History',
  },
  navigationTransaction: {
    id: 'navigationTransaction',
    defaultMessage: 'Transaction',
  },
  navigationTable: {
    id: 'navigationTable',
    defaultMessage: 'Table',
  },
  navigationMore: {
    id: 'navigationMore',
    defaultMessage: 'More',
  },
  //endregion
  //region Reset password page
  resetPasswordPage: {
    id: 'resetPasswordPageResetPassword',
    defaultMessage: 'Reset password',
  },
  resetPasswordPageEmail: {
    id: 'resetPasswordPageEmail',
    defaultMessage: 'Email',
  },
  resetPasswordPageCancel: {
    id: 'resetPasswordPageCancel',
    defaultMessage: 'Cancel',
  },
  resetPasswordPageSent: {
    id: 'resetPasswordPageSent',
    defaultMessage: 'Sent',
  },
  //endregion
  //region Change reset password page
  changeResetPasswordPagePassword: {
    id: 'changeResetPasswordPagePassword',
    defaultMessage: 'New Password',
  },
  changeResetPasswordPageConfirmPassword: {
    id: 'changeResetPasswordPageConfirmPassword',
    defaultMessage: 'Confirm New Password',
  },
  changeResetPasswordPageCancel: {
    id: 'resetPasswordPageCancel',
    defaultMessage: 'Cancel',
  },
  changeResetPasswordPageSent: {
    id: 'resetPasswordPageSent',
    defaultMessage: 'Sent',
  },
  //endregion
  //region Main page
  mainPageAllPrices: {
    id: 'mainPageAllPrices',
    defaultMessage: 'ALL PRICES',
  },
  mainPageLastTransactions: {
    id: 'mainPageLastTransactions',
    defaultMessage: 'Last transactions',
  },
  mainPageMoneyChart: {
    id: 'mainPageMoneyChart',
    defaultMessage: 'Money chart',
  },
  mainPageIncomeChart: {
    id: 'mainPageIncomeChart',
    defaultMessage: 'Income chart',
  },
  mainPageCostChart: {
    id: 'mainPageCostChart',
    defaultMessage: 'Cost chart',
  },
  mainPageNoData: {
    id: 'mainPageNoData',
    defaultMessage: 'No data',
  },
  //endregion
  //region History page
  historyPageHistory: {
    id: 'historyPageHistory',
    defaultMessage: 'HISTORY',
  },
  //endregion
  //region Add transaction page
  addTransactionPage: {
    id: 'addTransactionPage',
    defaultMessage: 'Add transaction',
  },
  addTransactionPageTitle: {
    id: 'addTransactionPageTitle',
    defaultMessage: 'Title',
  },
  addTransactionPagePrice: {
    id: 'addTransactionPagePrice',
    defaultMessage: 'Price',
  },
  addTransactionPageCurrencies: {
    id: 'addTransactionPageCurrencies',
    defaultMessage: 'Currencies',
  },
  addTransactionPageCategory: {
    id: 'addTransactionPageCategory',
    defaultMessage: 'Category',
  },
  addTransactionPageDate: {
    id: 'addTransactionPageDate',
    defaultMessage: 'Date',
  },
  addTransactionPageSavedTransaction: {
    id: 'addTransactionPageSavedTransaction',
    defaultMessage: 'Saved this transaction',
  },
  addTransactionPageDescription: {
    id: 'addTransactionPageDescription',
    defaultMessage: 'Description',
  },
  addTransactionPageIsTemplate: {
    id: 'addTransactionPageIsTemplate',
    defaultMessage: 'Save only template',
  },
  addTransactionPageTextColor: {
    id: 'addTransactionPageTextColor',
    defaultMessage: 'Text color',
  },
  addTransactionPageBackgroundColor: {
    id: 'addTransactionPageBackgroundColor',
    defaultMessage: 'Background color',
  },
  //endregion
  //region Group page
  groupPageGroup: {
    id: 'groupPageGroup',
    defaultMessage: 'Group',
  },
  groupPageCreateGroup: {
    id: 'groupPageCreateGroup',
    defaultMessage: 'Crete group',
  },
  groupPageCreateGroupDescription: {
    id: 'groupPageCreateGroupDescription',
    defaultMessage: ' ', // TODO
  },
  groupPageFindGroup: {
    id: 'groupPageFindGroup',
    defaultMessage: 'Find group',
  },
  groupPageFindGroupDescription: {
    id: 'groupPageFindGroupDescription',
    defaultMessage: ' ', // TODO
  },
  //endregion
  //region Find group page
  findGroupPageFindGroup: {
    id: 'findGroupPageFindGroup',
    defaultMessage: 'Find group',
  },
  //endregion
  //region Create group form
  createGroupForm: {
    id: 'createGroupForm',
    defaultMessage: 'Create group',
  },
  createGroupFormName: {
    id: 'createGroupFormName',
    defaultMessage: 'Name',
  },
  createGroupFormGroupIcon: {
    id: 'createGroupFormGroupIcon',
    defaultMessage: 'Group icon',
  },
  createGroupFormMaxMembers: {
    id: 'createGroupFormMaxMembers',
    defaultMessage: 'Max members',
  },
  createGroupFormDefaultCurrencies: {
    id: 'createGroupFormDefaultCurrencies',
    defaultMessage: 'Default currencies',
  },
  findGroupFormGroupName: {
    id: 'findGroupFormGroupName',
    defaultMessage: 'Group name',
  },
  //endregion
  //region Settings page
  settingsMainPageSettings: {
    id: 'settingsMainPageSettings',
    defaultMessage: 'Settings',
  },
  settingsMainPageChangeCategory: {
    id: 'settingsMainPageChangeCategory',
    defaultMessage: 'Change Category',
  },
  settingsMainPageChangePassword: {
    id: 'settingsMainPageChangePassword',
    defaultMessage: 'Change password',
  },
  settingsMainPageChangeLanguage: {
    id: 'settingsMainPageChangeLanguage',
    defaultMessage: 'Change language',
  },
  settingsMainPageChangeUsername: {
    id: 'settingsMainPageChangeUsername',
    defaultMessage: 'Change username',
  },
  //endregion
  //region Change currency form
  changeCurrencyPageTitle: {
    id: 'changeCurrencyPageTitle',
    defaultMessage: 'Change currency',
  },
  changeCurrencyFormCurrency: {
    id: 'changeCurrencyFormCurrency',
    defaultMessage: 'Currency',
  },
  //endregion
  //region Change language form
  changeLanguageFormLanguage: {
    id: 'changeLanguageFormLanguage',
    defaultMessage: 'Language',
  },
  //endregion
  //region Change language page
  changeLanguagePageChangeLanguage: {
    id: 'changeLanguagePageChangeLanguage',
    defaultMessage: 'Change language',
  },
  //endregion
  //region Change username form
  changeUsernameFormUsername: {
    id: 'changeUsernameFormUsername',
    defaultMessage: 'Username',
  },
  //endregion
  //region Change password form
  changePasswordFormOldPassword: {
    id: 'changePasswordFormOldPassword',
    defaultMessage: 'Old password',
  },
  changePasswordFormNewPassword: {
    id: 'changePasswordFormNewPassword',
    defaultMessage: 'New password',
  },
  changePasswordFormConfirmNewPassword: {
    id: 'changePasswordFormConfirmNewPassword',
    defaultMessage: 'Confirm new password',
  },
  //endregion
  //region Change category form
  changeCategoryPageTitle: {
    id: 'changeCategoryPageTitle',
    defaultMessage: 'Change category',
  },
  changeCategoryFormAddNewCategory: {
    id: 'changeCategoryFormAddNewCategory',
    defaultMessage: 'Add new category',
  },
  changeCategoryFormYourCategory: {
    id: 'changeCategoryFormYourCategory',
    defaultMessage: 'Your category',
  },
  changeCategoryFormEmptyArray: {
    id: 'changeCategoryFormEmptyArray',
    defaultMessage: "You don't have your own category",
  },
  //endregion
  //region Table page
  tablePageTable: {
    id: 'tablePageTable',
    defaultMessage: 'Table',
  },
  //endregion
  //region Details note page
  detailsNotePageNoteDetails: {
    id: 'detailsNotePageNoteDetails',
    defaultMessage: 'Note details',
  },
  //endregion
  //region Details transaction page
  detailsTransactionPageTitle: {
    id: 'detailsTransactionPageTitle',
    defaultMessage: 'Transaction details',
  },
  detailsTransactionPageCategory: {
    id: 'detailsTransactionPageCategory',
    defaultMessage: 'Category',
  },
  detailsTransactionPagePrice: {
    id: 'detailsTransactionPagePrice',
    defaultMessage: 'Price',
  },
  detailsTransactionPageDate: {
    id: 'detailsTransactionPageDate',
    defaultMessage: 'Date',
  },
  detailsTransactionPageDescription: {
    id: 'detailsTransactionPageDescription',
    defaultMessage: 'Description',
  },
  detailsTransactionPageChart1: {
    id: 'detailsTransactionPageChart1',
    defaultMessage: 'Percentage by',
  },
  detailsTransactionPageChart2: {
    id: 'detailsTransactionPageChart2',
    defaultMessage: 'category',
  },
  //endregion
  //region Add note form
  addNoteFormTitle: {
    id: 'addNotePageTitle',
    defaultMessage: 'Title',
  },
  addNoteFormTodoList: {
    id: 'addNotePageTodoList',
    defaultMessage: 'Todo list',
  },
  addNoteFormTextColor: {
    id: 'addNoteTextColor',
    defaultMessage: 'Text color',
  },
  addNoteFormBackgroundColor: {
    id: 'addNotePageBackgroundColor',
    defaultMessage: 'Background color',
  },
  //endregion
  //region Ddd note page
  addNotePageAddNote: {
    id: 'addNotePageAddNote',
    defaultMessage: 'Add note',
  },
  //endregion
  //region Notification page
  notificationPageNotificationPanel: {
    id: 'notificationPageNotificationPanel',
    defaultMessage: 'Notification panel',
  },
  //endregion
  //region Group main page
  groupMainPageUserIncomeChart: {
    id: 'groupMainPageUserIncomeChart',
    defaultMessage: 'Group member income',
  },
  groupMainPageUserCostChart: {
    id: 'groupMainPageUserCostChart',
    defaultMessage: 'Group member cost',
  },
  //endregion
  //region Manage form
  manageFormUser: {
    id: 'manageFormUser',
    defaultMessage: 'User',
  },
  manageFormRole: {
    id: 'manageFormRole',
    defaultMessage: 'Role',
  },
  //endregion
  //region Person navigation page
  navigationPageTransaction: {
    id: 'navigationPageTransaction',
    defaultMessage: 'Transaction',
  },
  navigationPageHistory: {
    id: 'navigationPageHistory',
    defaultMessage: 'History',
  },
  navigationPageTable: {
    id: 'navigationPageTable',
    defaultMessage: 'Table',
  },
  navigationPageSettings: {
    id: 'navigationPageSettings',
    defaultMessage: 'Settings',
  },
  //endregion
  //region VerificationSuccessfulPage
  verificationSuccessfulPageVerifySuccess: {
    id: 'verificationSuccessfulPageVerifySuccess',
    defaultMessage: 'Verification successful',
  },
  verificationSuccessfulPageYouCanLogin: {
    id: 'verificationSuccessfulPageYouCanLogin',
    defaultMessage: 'You can now login',
  },
  //endregion
  //region Modals
  addTransactionPageConfirmModal: {
    id: 'addTransactionPageConfirmModal',
    defaultMessage: 'Do you want to add this transaction?',
  },
  changeCategoryFormDeleteConfirmModal: {
    id: 'changeCategoryFormDeleteConfirmModal',
    defaultMessage: 'Do you want to delete the category?',
  },
  //endregion
  //region Buttons
  buttonAdd: {
    id: 'buttonAdd',
    defaultMessage: 'ADD',
  },
  buttonCreate: {
    id: 'buttonCreate',
    defaultMessage: 'Create',
  },
  buttonFind: {
    id: 'buttonFind',
    defaultMessage: 'Find',
  },
  buttonSent: {
    id: 'buttonSent',
    defaultMessage: 'Sent',
  },
  buttonSave: {
    id: 'buttonSave',
    defaultMessage: 'Save',
  },
  buttonDelete: {
    id: 'buttonDelete',
    defaultMessage: 'Delete',
  },
  buttonYes: {
    id: 'buttonYes',
    defaultMessage: 'Yes',
  },
  buttonNo: {
    id: 'buttonNo',
    defaultMessage: 'No',
  },
  buttonClickHere: {
    id: 'buttonClickHere',
    defaultMessage: 'Click here',
  },
  //endregion
});

export default messages;
