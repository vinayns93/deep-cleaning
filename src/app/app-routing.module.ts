import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SiteLayoutComponent } from "./layout/site-layout/site-layout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutComponent,
    children: [
      { path: "", component: HomeComponent, pathMatch: "full" }
      // { path: 'about', component: AboutComponent },
      // { path: 'test/:id', component: AboutComponent }
    ]
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
},
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
