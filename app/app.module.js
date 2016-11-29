import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CodeBlocksComponent } from './alsu/code-blocks/code-blocks.component';
import { BlockComponent } from './alsu/code-blocks/block/block.component';
import { InputComponent } from './alsu/code-blocks/input/input.component';
import { OutputComponent } from './alsu/code-blocks/output/output.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        FormsModule,
                        HttpModule
                    ],
                    declarations: [
                        AppComponent,
                        CodeBlocksComponent,
                        InputComponent,
                        OutputComponent,
                        BlockComponent
                    ],
                    providers: [],
                    bootstrap: [AppComponent],
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map