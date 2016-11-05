import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="header-bar"></div>
        <nav>
            <!-- <a routerLink="/code-blocks" routerLinkActive="active">CodeBlocks</a> -->
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})

export class AppComponent { }
