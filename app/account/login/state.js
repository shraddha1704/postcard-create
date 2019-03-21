'use strict';

const HTML = require('./index.html');

module.exports = ($stateProvider) => {

  $stateProvider.state('login', {
    url: '/login',
    template: HTML,
    controller: 'LoginCtrl',
    data: {
      authenticated: false
    }
  });

};
