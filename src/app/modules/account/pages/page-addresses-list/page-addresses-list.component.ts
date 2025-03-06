import { Address } from '../../../../shared/interfaces/address';
import { addresses } from '../../../../../data/account-addresses';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/api/auth.service';
import { RootService } from 'src/app/shared/services/root.service';
import { AddressService } from 'src/app/shared/api/address.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-page-addresses-list',
    templateUrl: './page-addresses-list.component.html',
    styleUrls: ['./page-addresses-list.component.sass'],
    standalone: true,
    imports:[CommonModule, FormsModule, RouterLink]
})
export class PageAddressesListComponent implements OnInit, OnDestroy {
    addresses: Address[] = addresses;
    destroy$: Subject<void> = new Subject<void>();

    constructor(private toastyService: ToastrService,
        private addresssevices: AddressService,
        private _formBuilder: UntypedFormBuilder,
        private socialAuthService: SocialAuthService,
        private router: Router,
        private root: RootService) { }

    async ngOnInit(): Promise<void> {
        this.addresssevices.getaddresses().subscribe(((res: Address[]) => {
            this.addresses = res;
        }));
    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    removeaddress(addid: any) {
        this.addresssevices.removeAddress(addid).subscribe(((res: Boolean) => {
            if (res == true) {
                this.toastyService.success(`Done`);
                let index=  this.addresses.findIndex(fruit => fruit.ID ===addid);
                
                this.addresses.splice(index,1);
            }
            else {
                this.toastyService.error(`Somthing Went Wrong`);
            }
        }));
    }
}
