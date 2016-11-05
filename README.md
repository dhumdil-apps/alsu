# alsu

## Prerequisites & Installing npm packages

Node.js and npm are essential to Angular development.

Install the npm packages described in the `package.json` and verify that it works:
```bash
git clone https://github.com/m16peter/alsu2.git

npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.


### vscode - tweak
```
"files.exclude": {
    "src/**/*.js": true,
    "src/**/*.js.map": true
}
```
