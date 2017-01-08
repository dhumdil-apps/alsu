import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

// app
import { AppComponent }     from './app.component';

// layout
import { MainComponent }        from '../alsu/main/main.component';
// import { ToolbarComponent }     from './../alsu/toolbar/toolbar.component';
// import { LeftSideComponent }    from './../alsu/right-side/right-side.component';
// import { RightSideComponent }   from './../alsu/left-side/left-side.component';
// // alsu
// import { CodeBlocksComponent }  from '../alsu/main/code-blocks/code-blocks.component';
// import { BlockComponent }       from '../alsu/main/code-blocks/block/block.component';
// import { InputComponent }       from '../alsu/left-side/input/input.component';
// import { OutputComponent }      from '../alsu/right-side/output/output.component';

@NgModule({
    declarations: [
        AppComponent,

        MainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
