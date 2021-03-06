var nodeunit = require('nodeunit');

/** Test files to be executed, relative to the test/ folder */
var test_files = [
  'provisioning-test.js',
  'provision-log-test.js'
];

// Get a test reporter
var reporter = nodeunit.reporters.default;

// Run test
reporter.run(test_files.map(function(test) {
      return './tests/' + test;
}));
