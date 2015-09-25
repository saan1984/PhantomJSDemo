var page = require('webpage').create();
page.open('http://google.com/', function(status) {
    if(status === "success"){
        console.log("URL Found");
        page.render('google.png');
    }else{
        console.log("URL not found")
    }
    phantom.exit();
});