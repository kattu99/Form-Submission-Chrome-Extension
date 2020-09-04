let textField = document.getElementById('output');
let testField = document.getElementById('test');
let submittedForms;
var required;

chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    let split = url.split('/')
    for (let i = 0; i<split.length; i++) {
        if (split[i] == "e") {
            required = split[i+1]
            break
        }
    }
    testField.innerHTML = required
    chrome.storage.sync.get(['submittedForms'], function(result) {
        submittedForms = result['submittedForms'];
        if (submittedForms && submittedForms.includes(required)) {
            textField.innerHTML = "This form was visited"
        }    
    });
});
    
    


