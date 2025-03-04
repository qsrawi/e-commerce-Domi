import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
    selector: 'app-terms',
    templateUrl: './page-terms.component.html',
    styleUrls: ['./page-terms.component.scss']
})
export class PageTermsComponent {
    basictemrs:string='';
    loading=true;
    constructor(public store: StoreService) {

        this.store.getterms().subscribe((res: any) => {
            //Console.log(res);

            if(res.status==true){
                this.basictemrs=res.terms;
            }
            // this.basictemrs=res;
            // this.loading=false;
        });
     }
}
