const url = require('url');

const myUrl = new URL('https://mywebsite.com/hello.html?id=100&status=active');

// Get serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// https://mywebsite.com/hello.html?id=100&status=active

// Get host (root domain)
console.log(myUrl.host);
// mywebsite.com (also gets port number (ex: mywebsite.com:8000))

// Get hostname
console.log(myUrl.hostname);
// mywebsite.com

// Get pathname
console.log(myUrl.pathname);
// hello.html

// Get serialized query
console.log(myUrl.search);
// ?id=100&status=active

// Get parameters as an object
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through parameters
myUrl.searchParams.forEach(function(value, name) {
    console.log(`${name}, ${value}`)
});
/* id, 100
status, active
abc, 123 */