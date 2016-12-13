// core
import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
// alsu
import { AppComponent }   from './app.component';
import { CodeBlocksComponent } from './alsu/code-blocks/code-blocks.component';
import { BlockComponent } from './alsu/code-blocks/block/block.component';
import { InputComponent } from './alsu/code-blocks/input/input.component';
import { OutputComponent } from './alsu/code-blocks/output/output.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        CodeBlocksComponent,  BlockComponent,
        InputComponent, OutputComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
})

export class AppModule { }
