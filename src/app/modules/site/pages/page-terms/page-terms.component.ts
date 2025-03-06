import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from 'src/app/shared/components/page-header/page-header.component';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
    selector: 'app-terms',
    templateUrl: './page-terms.component.html',
    styleUrls: ['./page-terms.component.scss'],
    standalone: true,
    imports:[PageHeaderComponent, CommonModule]
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
