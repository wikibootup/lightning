import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';



import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';
import { ObjectsModule } from './objects/objects.module';
import { ThemesModule } from './themes/themes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PagesModule,
    CoreModule,
    ObjectsModule,
    ThemesModule
  ],
  providers: [
    Location, {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
