import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyChatModule } from 'my-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyChatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
