import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(private service:ServiceService){}
ngDoCheck(){
  this.menuValue=this.service.menuActive
}
  // @Input() buttons=["AutoComplete","Badge","Bottom Sheet","Button","Button toggle","Card","checkbox","chips","Dialog","divider","core","form field","chips","datepicker","input","menu","list","progress bar"]
  @Input() buttons = [
  { btn: 'AutoComplete', path: '' },
  { btn: 'Badge', path: 'badge' }, 
  { btn: 'Bottom Sheet', path: 'bottomsheet' },
  {btn:"Button",path:""},
  {btn:"Button toggle",path:""},
  {btn:"card",path:""},
  {btn:"chechBox",path:""},
  {btn:"chips",path:""},
  {btn:"Dialoge",path:""},
  {btn:"divider",path:""},
  {btn:"core",path:""},
  {btn:"form field",path:""},
  {btn:"chips",path:""},
  {btn:"datepicker",path:""},
  {btn:"input",path:""},
  {btn:"menu",path:""},
  {btn:"list",path:""},
  {btn:"progrees Bar",path:""},
  {btn:"form",path:""}
  ]

menuValue=false

}
