import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeBlocksComponent } from '../alsu/code-blocks/code-blocks.component.js';
import { BlockComponent } from '../alsu/code-blocks/block/block.component.js';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/code-blocks',
        pathMatch: 'full'
    },
    {
        path: 'code-blocks',
        component: CodeBlocksComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [CodeBlocksComponent, BlockComponent];
