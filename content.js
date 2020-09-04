let submittedForms; 

url = window.location.href;
// use `url` here inside the callback because it's asynchronous!
let split = url.split('/')
for (let i = 0; i<split.length; i++) {
    if (split[i] == "e") {
        required = split[i+1]
        break
    }
}

console.log(url);


chrome.storage.sync.get(['submittedForms'], function(value) {
    submittedForms = value['submittedForms']
    console.log(submittedForms);
    if (!submittedForms) {
        submittedForms = []
        submittedForms.push(required)
    } 
    else {
        submittedForms.push(required)
    }
    console.log("test 2");

    chrome.storage.sync.set({'submittedForms': submittedForms}, function() {
        // Notify that we saved.
        console.log('Settings saved' + required);
    });
});


