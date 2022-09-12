import { defineMessages } from 'react-intl';

const pages = {
  register: {
    id: 'registerPage',
  },
};

const registerPage = {
  username: {
    id: `${pages.register.id}.username`,
    defaultMessage: 'Username',
  },
  email: {
    id: `${pages.register.id}.email`,
    defaultMessage: 'Email',
  },
};

const messages = defineMessages({
  hello: {
    id: 'hello',
    defaultMessage: 'hello',
  },
  ...registerPage,
});

export default messages;
