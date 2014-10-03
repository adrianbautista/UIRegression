var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
    screenshotRoot: './ex-3-screenshots',
    failedComparisonsRoot: './ex-3-failures'
});

// Set the page width
casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here

casper.start('http://localhost:8080/style-guide.html');

casper.then(function() {
  phantomcss.screenshot('.nav-breadcrumb', 'navigation breadcrumbs links');
});

casper.then(function() {
  phantomcss.screenshot('#nav-primary', 'primary navigation links');
});

casper.then(function() {
  phantomcss.screenshot({
    top: 0,
    left: 0,
    width: 500,
    height: 400
  }, 'top-left corner');
});

casper.then(function() {
  phantomcss.compareAll();
});

casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});
