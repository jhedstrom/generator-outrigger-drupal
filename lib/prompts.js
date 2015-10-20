'use strict';

var _ = require('lodash');

var prompts = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Machine-name of your project?',
    // Name of the parent directory.
    default: _.last(process.cwd().split('/')),
    validate: function (input) {
      return (input.search(' ') === -1) ? true : 'No spaces allowed.';
    }
  },
  {
    type: 'list',
    name: 'webserver',
    message: 'Choose your webserver:',
    choices: [
      'apache',
      'nginx',
      'custom'
    ],
    default: 'apache'
  },
  {
    name: 'webImage',
    message: 'Specify your webserver Docker image:',
    default: 'phase2/apache24php55',
    when: function(answers) {
      return answers.webserver == 'custom';
    },
    validate: function(input) {
      if (_.isString(input)) {
        return true;
      }

      return 'A validate docker image identifier is required.';
    }
  }
];

module.exports = prompts;