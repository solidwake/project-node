const fs = require('fs');
const path = require('path');

// Create a folder
/* fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if (err) throw err;
    console.log('Folder created...')
}); */

// Create a file and write to it
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', function(err) {
    if (err) throw err;
    console.log('Created a file and wrote to it...')
}); */

// The writeFile method will overwrite the content of a preexisting file. In order to write additional content in the file, use appendFile
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', function(err) {
    if (err) throw err;
    console.log('Created a file and wrote to it...')
}); */

/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js', function(err) {
    if (err) throw err;
    console.log('Created a file and wrote to it...')

    // File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nBackend programming is fun', function(err) {
        if (err) throw err;
        console.log('File written to...')
    })
}); */

//Read file
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
}); */

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), function(err) {
    if (err) throw (err);
    console.log('File renamed...');
});
