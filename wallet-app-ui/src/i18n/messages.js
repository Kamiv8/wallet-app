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
  loginEmail: {
    id: 'loginPageEmail',
    defaultMessage: 'Email',
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
  login: {
    id: 'loginPageLogin',
    defaultMessage: 'Login',
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
});

export default messages;
