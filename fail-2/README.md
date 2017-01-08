# alsu

## Prerequisites & Installing npm packages

<a href="https://nodejs.org/en/">Node.js</a> and npm are essential to <a href="https://angular.io/">Angular</a> development.

Install the npm packages described in the `package.json`:
```bash
npm install
npm start
```
Shut it down manually with `Ctrl-C`.

### vscode - tweak
```
// Place your settings in this file to overwrite the default settings
{

    "files.exclude": {
        "src/**/*.js": true,
        "src/**/*.js.map": true,

        "src/app/main*.ts": true,
        "src/app/rxjs*.ts": true,
        "node_modules": true,
        ".*": true,
        "**/*.json": true,
        "*-config.*": true,
        "index-*.html": true,
        "*.js": true,
        "LICENSE": true,
        "README.md": true
    }

}
```
