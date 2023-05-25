import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-admindetials',
  templateUrl: './admindetials.component.html',
  styleUrls: ['./admindetials.component.css']
})
export class AdmindetialsComponent {

  constructor(private id: ActivatedRoute, private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.adminId = this.id.snapshot.paramMap.get("id")
    this.service.getSingleData(this.adminId).subscribe(data => this.adminSingleData = data)
  }
  adminId !: any
  adminPage() {
    this.router.navigateByUrl("/admin")
  }
  adminSingleData: any

}
