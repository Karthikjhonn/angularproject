import { Component ,Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private services:ServiceService,private route:Router){}
  ngAfterContentChecked(){
  this.heading=this.route.url.split("/")[1]
  }
  ngDoCheck(){
    this.services.getColor(this.colorPanel)
    this.services.setMenuValue(this.menuActive) 
  }

list=["Number","Release Candidate ","Version","V9","V8","V6","V4","V1.1"];

public isCollapsed = false;


// ---------------

colorPanel!:any;

getBgColor(e:any){
  this.colorPanel=e.target.value
  this.outputBgColors()
}

@Output()bgColors:EventEmitter<any>= new EventEmitter<any>

outputBgColors(){
  this.bgColors.emit(this.colorPanel)
}

// -----------------------
heading:string=''

// menuActive-----------
menuActive=false
menuChange(){
  if(this.menuActive==true){
    this.menuActive=false
  }else if(this.menuActive==false){
    this.menuActive=true
  }
}



}
