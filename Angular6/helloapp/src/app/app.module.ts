import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { xyi }   from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ xyi ],
    bootstrap:    [ xyi ],
	exports:      [ ],
	providers:    [ ]
})
export class AppModule { }