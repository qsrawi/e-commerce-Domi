import { Component, OnInit } from '@angular/core';
import { CustomerServices, CustomerServicesinit } from 'src/app/shared/Models/CustomerServices';
import { DirectionService } from 'src/app/shared/services/direction.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-page-shipping-and-returns',
  templateUrl: './page-shipping-and-returns.component.html',
  styleUrls: ['./page-shipping-and-returns.component.scss']
})
export class PageShippingAndReturnsComponent implements OnInit {

  
  basictemrs:string='';
  loading=true;
  cus: CustomerServices = CustomerServicesinit;

  constructor(
      private direction: DirectionService,public store: StoreService
  ) { 
      this.store.getCustomnerService('ShippingandReturns').subscribe((res: CustomerServices) => {
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
