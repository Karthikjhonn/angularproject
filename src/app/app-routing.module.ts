import { Component, NgModule,Input } from '@angular/core';
import { OutletContext, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/CDKcomponents/accordion/accordion.component';
import { CDKComponent } from './components/cdk/cdk.component';
import { AccessibilityComponent } from './components/CDKcomponents/accessibility/accessibility.component';
import { ComponentComponent } from './components/component/component.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { GuidesComponent } from './components/guides/guides.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AutoCompleteComponent } from './components/SubComponent/auto-complete/auto-complete.component';
import { BadgeComponent } from './components/SubComponent/badge/badge.component';
import { FormComponent } from './components/form/form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindetialsComponent } from './components/admindetials/admindetials.component';




const routes: Routes = [
  {path:'' , component:HomepageComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  {path:"component",component:ComponentComponent,children:[
    {path:'',component:AutoCompleteComponent},
    {path:'badge',component:BadgeComponent},
  ]},

  {path:'cdkCategories' , component:CDKComponent,children:[
    {path:'',component:AccessibilityComponent},
    {path:'accordion',component:AccordionComponent}
  ]},
  {path:'guides', component:GuidesComponent},
  {path:'signup', component:FormComponent},
  {path:'admin', component:AdminComponent},
  {path:'admindetials/:id',component:AdmindetialsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { 

 

}
