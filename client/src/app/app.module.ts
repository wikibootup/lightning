import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UsersModule,
    AuthModule,
    AppRouter
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
