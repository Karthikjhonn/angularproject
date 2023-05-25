import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.css']
})
export class CDKComponent {



// @Input()btnLinks=["Accessibility","Accordion" ,"Bidirectionality","clipbord" ,"coercion","collections","component Harnesses","dialog","drag and drop","layout","listmenu","menu","observe","overlay","portal","scrolling","stepper","table","textfield"]
@Input() btnLinks = [
  { btn: 'Accessibility', path: '' },
{ btn: 'Accordion', path: 'accordion' }, 
{ btn: 'Bidirectionality', path: 'Bidirectionality' },
{btn:"clipbord",path:"clipbord"},
{btn:"coercion",path:""},
{btn:"collections",path:""},
{btn:"component Harnesses",path:""},
{btn:"portal",path:""},
{btn:"Dialoge",path:""},
{btn:"drag and grop",path:""},
{btn:"menu",path:""},
{btn:"listmenu",path:""},
{btn:"overlay",path:""},
{btn:"observe",path:""},
{btn:"scrolling",path:""},
{btn:"stepper",path:""},
{btn:"list",path:""},
{btn:"table",path:""},
{btn:"textField",path:""}
]

sideLinks=["ListKeyManager",
"Basic usage",
"Wrapping",
"Types of key managers",
"FocusTrap",
"Example",
"Regions",
"InteractivityChecker",
"LiveAnnouncer",
"Exampl FocusMonitor",
"cdkMonitorElementFocus and cdkMonitorSubtreeFocus",
"Styling utilities",
"Hiding elements in an accessible way",
"Targeting high contrast users"]

}
