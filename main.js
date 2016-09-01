require.config({
    paths: {
        'angular': 'assets/js/angular',
        'ui-router': 'assets/js/angular-ui-router',
        'angular-material': 'assets/js/angular-material',
        'angular-aria': 'assets/js/angular-aria',
        'angular-messages': 'assets/js/angular-messages',
        'angular-animate': 'assets/js/angular-animate',
        'code-module': 'app/code.module',
        'dnd-lists': 'assets/js/angular-drag-and-drop-lists'
    },
    shim: {
        'ui-router': ['angular'],
        'angular-animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-messages': ['angular'],
        'dnd-lists': ['angular'],
        'angular-material': ['angular', 'angular-animate', 'angular-aria', 'angular-messages'],
        'code-module': ['angular', 'ui-router', 'dnd-lists'],
        'angular': {
            exports: 'angular'
        }
    },
    deps: ['app/app.module']
});
