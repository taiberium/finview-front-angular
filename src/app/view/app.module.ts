import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopPanelComponent } from './root/top-panel/top-panel.component';
import { BottomPanelComponent } from './root/bottom-panel/bottom-panel.component';
import { BodyComponent } from './body/body.component';
import { Auth0Component } from './auth0/auth0.component';
import { TableComponent } from './portfolio/table/table.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    RootComponent,
    TopPanelComponent,
    BottomPanelComponent,
    BodyComponent,
    Auth0Component,
    TableComponent,
    PortfolioComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
