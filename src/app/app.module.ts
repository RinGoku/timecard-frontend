import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// 追加！
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatTableModule } from '@angular/material';

import { PAGES } from './pages';

import { RouterModule } from '@angular/router';

import { appRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    PAGES
  ],
  imports: [
    BrowserModule,
    // 追加！
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }