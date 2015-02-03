Router.configure({
  layoutTemplate: 'appLayout',
  controller: 'AppController',
  loadingTemplate: 'loading'
});

Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
