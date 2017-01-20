import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';

import { MainComponent }       from '../alsu/main.component';
import { MainService }       from '../alsu/main.service';
import { CodeBlocksComponent } from '../alsu/code-blocks/code-blocks.component';
import { BlockComponent }      from '../alsu/code-blocks/block/block.component';
import { LeftSideComponent }   from '../alsu/left-side/left-side.component';
import { AlsuInputComponent }  from '../alsu/left-side/alsu-input/alsu-input.component';
import { RightSideComponent }  from '../alsu/right-side/right-side.component';
import { AlsuOutputComponent } from '../alsu/right-side/alsu-output/alsu-output.component';
import { ToolbarComponent }    from '../alsu/toolbar/toolbar.component';
import { PopUpComponent }    from '../alsu/pop-up/pop-up.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
            CodeBlocksComponent, BlockComponent,
            LeftSideComponent, AlsuInputComponent,
            RightSideComponent, AlsuOutputComponent,
            ToolbarComponent,
        PopUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [CookieService, MainService],
    bootstrap: [AppComponent]
})
export class AppModule { }
