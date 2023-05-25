import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

constructor(private services:ServiceService){}
ngDoCheck(){
this.bgColor=this.services.bgColors
}
bgColor:any;


}
