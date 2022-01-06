const sharp = require('sharp');


//read image from disk
const readImage = (path) => {
    return sharp(path).metadata();
}

readImage('./imagesToCompress/test.png').then(function(metadata) {
    console.log(metadata);
});