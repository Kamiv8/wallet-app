import { defineMessages } from 'react-intl';

const messages = defineMessages({
  // Test
  hello: {
    id: 'hello',
    defaultMessage: 'hello',
  },
  // Register Page
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
  //Login Page
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
  // Navigation modal
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
  // Reset password
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
  // Main page
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
  // History page
  historyPageHistory: {
    id: 'historyPageHistory',
    defaultMessage: 'HISTORY',
  },
  // Add transaction page
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
  addTransactionPageTextColor: {
    id: 'addTransactionPageTextColor',
    defaultMessage: 'Text color',
  },
  addTransactionPageBackgroundColor: {
    id: 'addTransactionPageBackgroundColor',
    defaultMessage: 'Background color',
  },
  // Group page
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
  // find group page
  findGroupPageFindGroup: {
    id: 'findGroupPageFindGroup',
    defaultMessage: 'Find group',
  },
  // Create group form
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
  //Settings
  settingsMainPageSettings: {
    id: 'settingsMainPageSettings',
    defaultMessage: 'Settings',
  },

  //Change currency
  changeCurrencyFormCurrency: {
    id: 'changeCurrencyFormCurrency',
    defaultMessage: 'Currency',
  },

  // change language
  changeLanguageFormLanguage: {
    id: 'changeLanguageFormLanguage',
    defaultMessage: 'Language',
  },

  // change username
  changeUsernameFormUsername: {
    id: 'changeUsernameFormUsername',
    defaultMessage: 'Username',
  },

  // change password
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

  //change category
  changeCategoryFormAddNewCategory: {
    id: 'changeCategoryFormAddNewCategory',
    defaultMessage: 'Add new category',
  },
  changeCategoryFormYourCategory: {
    id: 'changeCategoryFormYourCategory',
    defaultMessage: 'Your category',
  },

  // table page

  tablePageTable: {
    id: 'tablePageTable',
    defaultMessage: 'Table',
  },

  // details note

  detailsNotePageNoteDetails: {
    id: 'detailsNotePageNoteDetails',
    defaultMessage: 'Note details',
  },

  // add note form
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

  // add note page
  addNotePageAddNote: {
    id: 'addNotePageAddNote',
    defaultMessage: 'Add note',
  },

  //notification page
  notificationPageNotificationPanel: {
    id: 'notificationPageNotificationPanel',
    defaultMessage: 'Notification panel',
  },

  // group main page
  groupMainPageUserIncomeChart: {
    id: 'groupMainPageUserIncomeChart',
    defaultMessage: 'Group member income',
  },

  groupMainPageUserCostChart: {
    id: 'groupMainPageUserCostChart',
    defaultMessage: 'Group member cost',
  },

  // manage form

  manageFormUser: {
    id: 'manageFormUser',
    defaultMessage: 'User',
  },
  manageFormRole: {
    id: 'manageFormRole',
    defaultMessage: 'Role',
  },

  // Buttons
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
});

export default messages;
