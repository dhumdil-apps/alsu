require.config({
    paths: {
        'angular': 'src/js/angular',
        'ui-router': 'src/js/angular-ui-router',
        'angular-material': 'src/js/angular-material',
        'angular-aria': 'src/js/angular-aria',
        'angular-messages': 'src/js/angular-messages',
        'angular-animate': 'src/js/angular-animate',
        'alsu-module': 'src/app/alsu.module',
        'dnd-lists': 'src/js/angular-dnd-lists'
        // 'du-scroll': 'src/js/angular-scroll.min'
    },
    shim: {
        'ui-router': ['angular'],
        'angular-animate': ['angular'],
        'angular-aria': ['angular'],
        'angular-messages': ['angular'],
        'angular-material': ['angular', 'angular-animate', 'angular-aria', 'angular-messages'],
        'alsu-module': ['angular', 'ui-router'],
        'dnd-lists': ['angular', 'alsu-module'],
        // 'du-scroll': ['angular', 'alsu-module'],
        'angular': {
            exports: 'angular'
        }
    },
    deps: ['src/app.module']
});
