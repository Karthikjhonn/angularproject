import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  card=[{
    title:"Get Started",
    text:"Add  angular material to your project"
  }]

}
