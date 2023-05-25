import { Component, Input, Output } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(private service:ServiceService){}
// ngDoCheck(){
//   this.bgColor=this.service.bgColors
// }
@Input()bgColor:any;

 
  
}
