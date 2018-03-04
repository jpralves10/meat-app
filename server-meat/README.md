# *Node.js and Self-signed SSL Certificates*

### Create self-signed SSL Certificate

NOTE: Your certificate is not working? Meet the good reason for it: Logjam, https://www.openssl.org/blog/blog/2015/05/20/logjam-freak-upcoming-changes/.

Check the version of your openssl package. If it is older than 1.0.2, the generated certificate will not be accepted by a later Node.js interpreter. As Node.js uses openssl libraries, chances are you have fresh node but stale openssl utility.

1. Generate RSA key. In the Terminal enter
	`openssl> genrsa -out key.key`

	The key.key file will be generated.
	
2. Create a certificate signing request (CSR) for an SSL certificate. Answer the questions
`openssl> req -new -key key.key -days 3650 -out cert.csr`

	- Country Name (2 letter code) [AU]:BR
	- State or Province Name (full name) [Some-State]:Parana
	- Locality Name (eg, city) []:Curitiba
	- Organization Name (eg, company) [Internet Widgits Pty Ltd]:Teste Ltda
	- Organizational Unit Name (eg, section) []:Tecnology
	- Common Name (e.g. server FQDN or YOUR name) []:localhost
	- Email Address []:admin@localhost.com
	- A challenge password []: <Enter>
	- An optional company name []: <Enter>

	An .csr file will be created.

3. Create the certificate from the certificate request
	`openssl> req -x509 -days 3650 -in cert.csr -key key.key -out cert.crt`

Signature ok
`subject=/C=UK/ST=Surrey/L=Guildford/O=Mock Server Ltd/OU=mockdept/CN=mockserver.com/emailAddress=admin@localhost.com`
Getting Private key

### Setting up Simple Express Server

1. Create folder `nodejs-ssl`.
2. Go inside and create folder `server`.
3. In a terminal window, execute npm init command.
	`npm init`

	The new project wizard will run and will ask you a couple of questions to 		create an initial package.json file
	Accept default suggestions by pressing Enter, except entry point line.

4. For entry point: (index.js) enter `server.js`

	After you confirm yes on Is this OK line, the terminal prompt will be back and package.json file will appear in the file explorer pane.

5. Still in the terminal window, enter
	`npm install express --save`

	The latest express package will be installed locally in the ./node_modules folder, together with its dependencies. The package.json file will be updated with a new entry in the dependencies section.

6. Create `server.js` file. Enter the implementation of the simple http server

>var express = require("express");
var https = require("https");
var server = express();
var fs = require("fs")
server.get("/", function(req, res){
res.send("<'h1>hello<'h2>");
});
var options = {
	key: fs.readFileSync("key.key"),
	cert: fs.readFileSync("cert.crt")
}
https.createServer(options, server).listen(3443, function () {
    console.log('Server is running on https://localhost:3443');
});

### Configuring request Client to Work with Self-Signed Certificate

**Setting up Client Project**

1. In an original Terminal window
`cd ~/dbc/nodejs-ssl`
`mkdir client`
`cd client`

2. Create `package.json` by executing
`npm init`
Enter `httpsrequest.js` for the enty point.

3. Define request nodejs dependency
`npm install request --save`

**Define https Request Program**

1. Create new file `httpsrequest.js`

2. Let's emulate passing a signed certificate to a remote client. In the embedded terminal, copy certificate file to the client folder

3. Call request() module to perform GET method on https://mockserver.com:3443/ URL.

>var request = require("request");
var fs = require("fs");
var options = {
	uri: "https://localhost:3443/",
	method: "GET",
	ca: fs.readFileSync("cert.crt")
};
request(options, function(err, response, body){
	if( err ){
		console.log(err);
	}else{
		console.log(response.statusCode);
		console.log(body);
	}
});

4. Run the program from the terminal window
`$ node httpsrequest.js`
`200`
`<h1>hello<h2>`

**NOTE:** You can use curl with `--cacert option to pass a certificate to a curl request.`

`$ curl https://localhost:3443 -v --cacert cert.crt`

	Rebuilt URL to: https://localhost:3443/
	Trying 127.0.0.1...
	Connected to localhost (127.0.0.1) port 3443 (#0)
	TLS 1.2 connection using TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
	Server certificate: localhost

> GET / HTTP/1.1
> Host: localhost:3443
> User-Agent: curl/7.43.0
> Accept: */*
>

>< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: text/html; charset=utf-8
< Content-Length: 13
< ETag: W/"d-hUnoxh6MSUXHR7KEkijVhA"
< Date: Mon, 11 Jul 2016 15:19:31 GMT
< Connection: keep-alive
<

	Connection #0 to host mockserver.com left intact
	<h1>hello<h2>
	$


## *Créditos*

[ApiGee Community](https://community.apigee.com/articles/28041/nodejs-and-self-signed-ssl-certificates.html)
