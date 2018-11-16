# MeatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Instalar [Angular CLI](https://cli.angular.io/)

Starter service: `ng serve` ou `npm start` <br/>
Navigate to `http://localhost:4200/`

Instalar [Json Server](https://www.npmjs.com/package/json-server)

Mocking backend: `json-server db.json` ou `node backend/server` <br/>
Navigate to `http://localhost:3000/`

## Generate JS from TS
Transpiling [TypeScript into JavaScript](https://code.visualstudio.com/docs/languages/typescript)
Command compiler `tsc -w`

## Generate Component

`ng generate component component-name` <br/>
`ng generate directive|pipe|service|class|guard|interface|enum|module` <br/>
`ng g c component-name --spec=false`

## Build

Run `ng build` to build the project. <br/>
The build artifacts will be stored in the `dist/` directory. <br/>
Use the `-prod` flag for a production build

## Google Chrome Dev Tools

*Debugging Agular:*
[Angular Augury](https://augury.angular.io/) *A Google Chrome Dev Tools extension for debugging Angular 2 or +  applications*

*Postman’s API Development Environment:*
[Postman](https://www.getpostman.com/) *Through design, testing and full production, Postman is there for faster, easier API development—without the chaos.*

## Instalar Complementos

Instalar [admin-lte](https://www.npmjs.com/package/admin-lte)
`npm install --save admin-lte` *is a fully responsive admin template. Based on Bootstrap 3 framework*

Instalar [font-awesome](https://www.npmjs.com/package/font-awesome)
`npm install --save font-awesome` *675 pictographic icons for easy scalable vector graphics on websites*

Instalar [web-animations-js](https://www.npmjs.com/package/web-animations-js)
`npm install --save web-animations-js` *API that provides Web Animation features in browsers that do not support it natively*

Instalar [intl](https://www.npmjs.com/package/intl)
`npm install --save intl` *This specification provides the framework to bring long overdue localization methods to ECMAScript implementations*

Instalar [jquery](https://www.npmjs.com/package/jquery)
`npm install --save jquery` *jQuery is a fast, small, and feature-rich JavaScript library.*

Instalar [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
`npm install reflect-metadata` *A number of use cases (Composition/Dependency Injection, Runtime Type Assertions, Reflection/Mirroring, Testing) want the ability to add additional metadata to a class in a consistent manner.*

Instalar [ts-helpers](https://www.npmjs.com/package/ts-helpers)
`npm install ts-helpers` *Typescript helpers for compiling typescript while specifying '--noEmitHelpers' within your 'tsconfig.json'.*

Instalar [json-server](https://www.npmjs.com/package/json-server)
`npm install -g json-server` *Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.*

Instalar [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
`npm install jsonwebtoken` *An implementation of JSON Web Tokens.*

Instalar [http-server](https://www.npmjs.com/package/http-server)
`npm install -g http-server` *is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.*

Instalar [nodemon](https://www.npmjs.com/package/nodemon)
`npm install nodemon -g`
`nodemon --watch backend backend/dist/server.js`

## Utilizando Git e GitHub

*Após Instalar o Git:* <br/>
`git config --global user.name "Jean Alves"` <br/>
`git config --global user.email "jpralves10@gmail.com"` <br/>

*[Gerar SSH Key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)* <br/>
`ssh-keygen -t rsa -b 4096 -C "jpralves10@gmail.com"` <br/>
`Enter/Enter/Enter` <br/>
`cat id_rsa.pub`

*[Add SSH Key](https://github.com/settings/ssh/new)* <br/>
`Clicar no Botão "New SSH Key"` <br/>
`Add Título e a Chave`

*Criar Novo Repositório:* <br/>
`git init` <br/>
`git commit -m "first commit"` <br/>
`git remote add origin https://github.com/jpralves10/meat-app.git` <br/>
`git push -u origin master`

*Push Repositório Existente* <br/>
`git remote set-url origin https://github.com/jpralves10/meat-app.git` <br/>
`git push -u origin master`

*Mudando Status e Comitando:* <br/>
`git status` <br/>
`git add .` <br/>
`git commit -am "Arquivos comitados"` <br/>
`git log` <br/>
`git push origin master`

## Observações Importantes

*Email Regex:* <br/>
`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

*Number Regex:* <br/>
`/^[0-9]*$/`

[JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=pt-BR) *Validate and view JSON documents in Chrome*

## Gerar Certificado OpenSSL

[Creating a SHA256 (SHA-1) self signed certificate for PingFederate](https://ping.force.com/Support/PingIdentityArticle?id=kA340000000GsWECA0)

*1. Generate certificate request using SHA256 (SHA-1)*
`openssl> req -nodes -sha256 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 3650`
    *`...`*
    *`A challenge password []:openssl`*
    *`An optional company name []:openssl`*
*2. Optional: Check to see if the CSR really has 256bit signatures*
`openssl> req -in cert.csr -text -noout` 
    *`You should see “Signature Algorithm: sha256WithRSAEncryption”`*
*3. Create the certificate*
`openssl> req -x509 -days 365 -sha256 -in cert.pem -key key.pem -out my256.crt`
*4. Add my256.crt in GoogleChrome*
`Chrome Settings > Show advanced settings > HTTPS/SSL > Manage Certificates`

[Use a SHA-2 instead of SHA-1 certificate in PingFederate](https://ping.force.com/Support/PingIdentityArticle?id=kA340000000GsCdCAK)

## Compilar e Testar

*1. Compilar (--extract-css=false evita erros de css)
`ng build --prod --extract-css=false` 

*2. Testar Projeto Compilado
`cd dist/`
`python -m SimpleHTTPServer 8080`

## Créditos

jpralves all rights copyright@
