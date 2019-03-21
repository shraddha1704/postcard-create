'use strict';

const HTML = require('../views/create.html');

module.exports = ($stateProvider) => {

  $stateProvider.state('create', {
    url: '/create',
    template: HTML,
    data: {
      authenticated: true
    }
  });

};
