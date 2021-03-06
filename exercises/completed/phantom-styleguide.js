var phantomcss = require('phantomcss/phantomcss.js');

phantomcss.init({
    libraryRoot: './node_modules/phantomcss',
    screenshotRoot: './ex-3-screenshots',
    failedComparisonsRoot: './ex-3-failures'
});

casper.options.viewportSize = {
    width: 1024,
    height: 1500
};

// Tests go here
casper.start('http://localhost:8080/style-guide.html');
casper.then(function () {
    phantomcss.screenshot('.nav-breadcrumb', 'Page Breadcrumbs');
});
casper.then(function () {
    phantomcss.screenshot('.nav-primary', 'Page Primary Navigation');
});
casper.then(function(){
    phantomcss.compareAll();
});


casper.run(function(){
    console.log('Tests completed!')
    phantom.exit(phantomcss.getExitStatus());
});