import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true,
  imports:[PageHeaderComponent, CommonModule]
})
export class PrivacyPolicyComponent{
  basictemrs:string='';
  loading=true;
  constructor(public store: StoreService) {

      this.store.getprivecypolicy().subscribe((res: any) => {
          //Console.log(res);

          if(res.status==true){
              this.basictemrs=res.PrivacyPolicy;
          }
          // this.basictemrs=res;
          // this.loading=false;
      });
   }

}
