import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-subcontent',
  templateUrl: './text-subcontent.component.html',
  styleUrls: ['./text-subcontent.component.css']
})
export class TextSubcontentComponent {
@Input()title="auto-complete works!"
}
