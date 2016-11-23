import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { AppComponent }   from './app.component';
// alsu
import { CodeBlocksListComponent } from './alsu/code-blocks-lists/code-blocks-list/code-blocks-list.component';
import { CodeBlockComponent } from './alsu/code-blocks-lists/code-blocks-list/code-block/code-block.component';
import { InputDataComponent } from './alsu/code-blocks-lists/code-blocks-list/input/input-data.component';
import { OutputDataComponent } from './alsu/code-blocks-lists/code-blocks-list/output/output-data.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    // alsu
    CodeBlocksListComponent,
    CodeBlockComponent,
    InputDataComponent,
    OutputDataComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
