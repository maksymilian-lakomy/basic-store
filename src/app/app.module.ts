import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StoreItemComponent } from './components/store/store-item/store-item.component';
import { StoreDisplayComponent } from './components/store/store-display/store-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreItemComponent,
    StoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
