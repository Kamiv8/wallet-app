export const devConfig = {
  // eslint-disable-next-line no-undef

  baseURL: () => {
    switch (process.env.NODE_ENV) {
      case 'production':
        return `https://localhost:${process.env.REACT_APP_PORT_HTTPS}/api`;
      case 'development':
        return `http://localhost:${process.env.REACT_APP_PORT_HTTP}/api`;
    }
  },
};
