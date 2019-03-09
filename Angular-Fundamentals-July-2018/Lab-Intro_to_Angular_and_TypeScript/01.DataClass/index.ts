import Request from './Requester';

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
