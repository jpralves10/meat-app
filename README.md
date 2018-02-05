# MeatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

### Development server

Instalar [Angular CLI](https://cli.angular.io/)

Starter service: `ng serve` ou `npm start` <br/>
Navigate to `http://localhost:4200/`

Instalar [Json Server](https://www.npmjs.com/package/json-server)

Mocking backend: `json-server db.json` <br/>
Navigate to `http://localhost:3000/`

### Generate Component

`ng generate component component-name` <br/>
`ng generate directive|pipe|service|class|guard|interface|enum|module` <br/>
`ng g c component-name --spec=false`

### Build

Run `ng build` to build the project. <br/>
The build artifacts will be stored in the `dist/` directory. <br/>
Use the `-prod` flag for a production build

### Instalar Complementos

Instalar [admin-lte](https://www.npmjs.com/package/admin-lte)
`npm install --save admin-lte` //is a fully responsive admin template. Based on Bootstrap 3 framework

Instalar [font-awesome](https://www.npmjs.com/package/font-awesome)
`npm install --save font-awesome` //675 pictographic icons for easy scalable vector graphics on websites

Instalar [web-animations-js](https://www.npmjs.com/package/web-animations-js)
`npm install --save web-animations-js` //API that provides Web Animation features in browsers that do not support it natively

Instalar [intl](https://www.npmjs.com/package/intl)
`npm install --save intl` //This specification provides the framework to bring long overdue localization methods to ECMAScript implementations

Instalar [jquery](https://www.npmjs.com/package/jquery)
`npm install --save jquery` //jQuery is a fast, small, and feature-rich JavaScript library.

Instalar [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
`npm install reflect-metadata` //A number of use cases (Composition/Dependency Injection, Runtime Type Assertions, Reflection/Mirroring, Testing) want the ability to add additional metadata to a class in a consistent manner.

Instalar [ts-helpers](https://www.npmjs.com/package/ts-helpers)
`npm install ts-helpers` //Typescript helpers for compiling typescript while specifying '--noEmitHelpers' within your 'tsconfig.json'.

### Utilizando Git e GitHub

Após Instalar o Git: <br/>
`git config --global user.name "Jean Alves"` <br/>
`git config --global user.email "jpralves10@gmail.com"` <br/>

[Gerar SSH Key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) <br/>
`ssh-keygen -t rsa -b 4096 -C "jpralves10@gmail.com"` <br/>
`Enter/Enter/Enter` <br/>
`cat id_rsa.pub`

[Add SSH Key](https://github.com/settings/ssh/new) <br/>
`Clicar no Botão "New SSH Key"` <br/>
`Add Título e a Chave`

Criar Novo Repositório: <br/>
`git init` <br/>
`git commit -m "first commit"` <br/>
`git remote add origin https://github.com/jpralves10/meat-app.git` <br/>
`git push -u origin master`

Push Repositório Existente <br/>
`git remote set-url origin https://github.com/jpralves10/meat-app.git` <br/>
`git push -u origin master`

Mudando Status e Comitando: <br/>
`git status` <br/>
`git add .` <br/>
`git commit -am "Arquivos comitados"` <br/>
`git log` <br/>
`git push origin master`

fatal: remote origin already exists.

### Observações Importantes

Email Regex: <br/>
`/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`

Number Regex: <br/>
`/^[0-9]*$/`

## Créditos

jpralves all rights copyright@
