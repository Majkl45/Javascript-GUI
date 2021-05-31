//import ipcRenderer
const ipcRenderer = require("electron").ipcRenderer;
const fs = require('fs');

const generatePassword = () => {
    ipcRenderer.send(
        "generatePassword", 
        document.querySelector(".keyWord").value
    );
};

ipcRenderer.on("receivePassword", (event, data) => {
    const passwordTag = document.querySelector("#password");
    passwordTag.innerText = data;
    fileData = data;
});

// ulozeni do souboru
var button = document.querySelector('#save');

button.onclick = function() {
    const fs = require('fs');
    
    fs.appendFile('Password-list.txt', fileData + "\n", (err) => {
        if (err) throw err;
    })
    alert('File Saved');
}