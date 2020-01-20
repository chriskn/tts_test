const fs = require('fs');
const txttomp3 = require("text-to-mp3");

const text = "This is a test for the text to speech api. Lets se if it works with longer text. Consisting of multiple sentences."
const voice_lang = "en"


txttomp3.attributes.tl = voice_lang;
txttomp3.getMp3(text).then(function(binaryStream){
    var file = fs.createWriteStream("FileName.mp3"); // write it down the file
    file.write(binaryStream);
    file.end();
})
    .catch(function(err){
        console.log("Error", err);
    });