import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
        AppComponent,
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FlexLayoutModule,
      MatButtonModule,
      HttpClientModule,
      MatCardModule,
      BrowserAnimationsModule
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
