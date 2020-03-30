'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list',controller.home.list);
  require('./reoute/post')(app);
  require('./reoute/user')(app);
};
