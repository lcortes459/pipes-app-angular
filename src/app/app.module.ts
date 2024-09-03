import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// import { ProductsModule } from './products/products.module';

import { AppComponent } from './app.component';

// Configuración del locale de la app
import localEsCOL from '@angular/common/locales/es-CO';
import localFrCA from '@angular/common/locales/fr-CA';
import {  registerLocaleData } from '@angular/common';

registerLocaleData( localEsCOL );
registerLocaleData( localFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    // ProductsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
