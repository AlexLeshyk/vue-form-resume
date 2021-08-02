export default {
  install: (app, options) => {
    console.log(app, options);

    let current = 'en';

    const changeLanguage = name => {
      current = name;
    }

    app.config.globalProperties.$translate = key => {
      return key.split('.').reduce((words, k) => {
        if (words) {
          return words[k];
        }
      }, options[current]);
    };

    app.provide('i18n', changeLanguage);
  }
}