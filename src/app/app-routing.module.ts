import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component'
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: "", component: BodyComponent }, //home page
  
  
  { path: "portfolio", component: PortfolioComponent }, //Portfolio

  { path: '**', redirectTo: "" }, //Not found reroute

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
