const WEB_SITE_ID = "39195956-f2de-4e3b-825c-57b08ba8f9b5";
const reg =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isEmail = (email: string) => reg.test(String(email).toLowerCase());

export { WEB_SITE_ID, isEmail };
