import { Component, OnInit } from '@angular/core';
import { CustomerServices, CustomerServicesinit } from 'src/app/shared/Models/CustomerServices';
import { DirectionService } from 'src/app/shared/services/direction.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-page-important-advices',
  templateUrl: './page-important-advices.component.html',
  styleUrls: ['./page-important-advices.component.scss']
})
export class PageImportantAdvicesComponent implements OnInit {

  basictemrs: string = '';
  loading = true;
  cus: CustomerServices = CustomerServicesinit;

  constructor(
    private direction: DirectionService, public store: StoreService
  ) {
    this.store.getCustomnerService('ImportantAdvices').subscribe((res: CustomerServices) => {
      //Console.log(res);
      this.cus = res;

      this.basictemrs = res.pageString;
      // this.basictemrs=res;
      // this.loading=false;
    });
  }

  ngOnInit(): void {
  }

}
