import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { CookieService }    from 'angular2-cookie/services/cookies.service';
import { AppComponent }     from './app.component';

import { MainComponent }       from '../alsu/main.component';
import { CodeBlocksComponent } from '../alsu/code-blocks/code-blocks.component';
import { BlockComponent }      from '../alsu/code-blocks/block/block.component';
import { LeftPanelComponent }  from '../alsu/side-panel/left-panel.component';
import { RightPanelComponent } from '../alsu/side-panel/right-panel.component';
import { AlsuInputComponent }  from '../alsu/side-panel/alsu-input/alsu-input.component';
import { AlsuOutputComponent } from '../alsu/side-panel/alsu-output/alsu-output.component';
import { PopUpComponent }      from '../alsu/pop-up/pop-up.component';
import { PopUpService }        from '../alsu/pop-up/pop-up.service';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
            CodeBlocksComponent,
                BlockComponent,
            LeftPanelComponent,
                AlsuInputComponent,
            RightPanelComponent,
                AlsuOutputComponent,
            PopUpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        CookieService,
        PopUpService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
