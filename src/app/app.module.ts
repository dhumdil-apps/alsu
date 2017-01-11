import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent }     from './app.component';

import { MainComponent }        from '../alsu/main.component';
import { ToolbarComponent }     from '../alsu/toolbar/toolbar.component';
import { LeftSideComponent }   from '../alsu/left-side/left-side.component';
import { AlsuInputComponent }       from '../alsu/left-side/alsu-input/alsu-input.component';
// import { CodeBlocksComponent }  from '../alsu/main/code-blocks/code-blocks.component';
// import { BlockComponent }       from '../alsu/main/code-blocks/block/block.component';
import { RightSideComponent }    from '../alsu/right-side/right-side.component';
import { AlsuOutputComponent }      from '../alsu/right-side/alsu-output/alsu-output.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
            LeftSideComponent, AlsuInputComponent,
            RightSideComponent, AlsuOutputComponent,
            ToolbarComponent
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
