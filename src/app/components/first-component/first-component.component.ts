import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent  {

  bgColorValue:any;

  bgColor(e:any){
  this.bgColorValue=e
  // console.log("footer"+e);
  }





}
