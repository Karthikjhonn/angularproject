import { NgIf } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {


  title = 'Karthick';
  num=5+5+5
  obj={
    name:"ram",
    age:22
  }

  empList=[
    {
      empID:100,
      empName:'karthick'
    },
    {
      empID:101,
      empName:'Tharun'
    }
  ];
//  for( let i=0;i<this.empList.length;i++){
     
//     return i
//     // console.log(i);
    
//   }
  arry=[1,2,3,4,2,2,2,2,2,];

// myVal= this.arry.forEach((data)=>{
//    return "<h1>data</h1>"
//   })

myVal="1"
number=4
name="john"
bgRed="color:red;"


count(){
  return(
    // this.myVal=this.myVal+1
    this.name="k"
    // this.number=this.number+this.myVal
  )
  
}

list=[1,1,1,1,1,1,1,1,1,1,1,1,1,]



};


