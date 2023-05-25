import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private service: ServiceService, private router: Router) { }
  ngOnInit() {
    this.service.getData().subscribe(data =>  this.adminData = data );
  }
  adminData: any
  admindetials(id:any){
    this.router.navigateByUrl("/admindetials/"+id.data.id)
  }

}
