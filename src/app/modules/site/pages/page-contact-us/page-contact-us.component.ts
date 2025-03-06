import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlockMapComponent } from 'src/app/modules/blocks/block-map/block-map.component';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';
import { initMessageModal, MessageModal } from 'src/app/shared/Models/Message';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss'],
    standalone: true,
    imports: [CommonModule, FormsModule, BlockMapComponent, PageHeaderComponent]
})
export class PageContactUsComponent {
    basictemrs:string='';
    loading=true;
    Email:string='';
   message:MessageModal=initMessageModal; 
    constructor(private router:Router ,private toastyService: ToastrService,public store: StoreService) {
        this.store.getcontactus().subscribe((res: any) => {
            //Console.log(res);

            if(res.status==true){
                this.basictemrs=res.contactus.contactus;
                this.Email=res.contactus.Email;
            }
            // this.basictemrs=res;
            // this.loading=false;
        });

     }


     SendMessage(){
        this.store.Sendmessage(this.message).subscribe((res:boolean)=>{

            //Console.log(res);
            if(res==true){

                this.toastyService.success(`Message sent Successfully`);
                this.message=initMessageModal;
            }
            
        });

     }
}
