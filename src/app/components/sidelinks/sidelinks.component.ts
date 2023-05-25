import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidelinks',
  templateUrl: './sidelinks.component.html',
  styleUrls: ['./sidelinks.component.css']
})
export class SidelinksComponent {

  @Input()sideLinks=[
    "Specifying the main and side content",
    "Opening and closing a sidenav",
    "Changing the sidenav's behavior",
    "Disabling automatic close",
    "Resizing an open sidenav",
    "Setting the sidenav's size",
    "Fixed position sidenavs",
    "Creating a responsive layout for mobile & desktop",
    "Reacting to scroll events inside the sidenav container",
    "Accessibility",
    "Focus management",
    "Troubleshooting",
    "Error: A drawer was already declared for position"
    ]

}
