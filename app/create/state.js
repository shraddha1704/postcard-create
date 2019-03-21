'use strict';

module.exports = function ($stateProvider) {

  $stateProvider.state('create', {
    url: '/create',
    template: '<h1>Create Page</h1>',
    data: {
      authenticated: true
    }
  });

};
