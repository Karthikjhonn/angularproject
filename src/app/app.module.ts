import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//outputEvent
import { EventEmitter , Output } from '@angular/core';

//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';


// components
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CDKComponent } from './components/cdk/cdk.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextContentComponent } from './components/text-content/text-content.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GuidesComponent } from './components/guides/guides.component';
import { ComponentComponent } from './components/component/component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidelinksComponent } from './components/sidelinks/sidelinks.component';
import { CardComponent } from './components/card/card.component';
//SubComponents
import { AutoCompleteComponent } from './components/SubComponent/auto-complete/auto-complete.component';
import { BadgeComponent } from './components/SubComponent/badge/badge.component';
//CDK Components
import { AccessibilityComponent } from './components/CDKcomponents/accessibility/accessibility.component';
import { AccordionComponent } from './components/CDKcomponents/accordion/accordion.component';
import { TextSubcontentComponent } from './components/text-subcontent/text-subcontent.component';

// form
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmindetialsComponent } from './components/admindetials/admindetials.component';

//Api
import { HttpClientModule } from '@angular/common/http';










@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    CDKComponent,
    HeaderComponent,
    FooterComponent,
    TextContentComponent,
    HomepageComponent,
    GuidesComponent,
    ComponentComponent,
    SidenavComponent,
    SidelinksComponent,
    CardComponent,
    BadgeComponent,
    AutoCompleteComponent,
    AccessibilityComponent,
    AccordionComponent,
    TextSubcontentComponent,
    FormComponent,
    AdminComponent,
    AdmindetialsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatMenuModule,
    ScrollingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatTooltipModule,
    MatCheckboxModule,
    NgbModule,
    NgbCollapseModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
