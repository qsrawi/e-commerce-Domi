import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';
import { CustomerServices, CustomerServicesinit } from 'src/app/shared/Models/CustomerServices';
import { DirectionService } from 'src/app/shared/services/direction.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-page-secure-shopping',
  templateUrl: './page-secure-shopping.component.html',
  styleUrls: ['./page-secure-shopping.component.scss'],
  standalone: true,
  imports:[PageHeaderComponent, CommonModule]
})
export class PageSecureShoppingComponent implements OnInit {

  basictemrs:string='';
  loading=true;
  cus: CustomerServices = CustomerServicesinit;

  constructor(
      private direction: DirectionService,public store: StoreService
  ) { 
      this.store.getCustomnerService('SecureShopping').subscribe((res: CustomerServices) => {
          //Console.log(res);
              this.basictemrs=res.pageString;
              this.cus = res;
          // this.basictemrs=res;
          // this.loading=false;
      });
  }
  ngOnInit(): void {
  }

}
