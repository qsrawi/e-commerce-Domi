import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/api/auth.service';
import { RootService } from 'src/app/shared/services/root.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass'],
    standalone: true,
    imports:[CommonModule, FormsModule, ReactiveFormsModule]
})
export class PageProfileComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject<void>();
    UserInfo!: any;
    signUpForm: UntypedFormGroup = this._formBuilder.group({
        UserName: ['', [Validators.required]],
        FullName: ['', [Validators.required]],
        Email: ['', Validators.required],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^[+]\d{12}$/)]]
    });
    usernamealeradyexist: Boolean = false;
    loading=true;

    constructor(private toastyService: ToastrService,
        private authserverService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private socialAuthService: SocialAuthService,
        private router: Router,
        private root: RootService) { }
    get f() {
        return this.signUpForm.controls;
    }
    async ngOnInit(): Promise<void> {
        this.authserverService.getuserinfo().subscribe(((res: JSON) => {
            this.UserInfo = res;
            this.signUpForm.setValue({
                UserName: this.UserInfo['UserName'],
                FullName: this.UserInfo['FullName'],
                Email: this.UserInfo['Email'],
                phoneNumber: this.UserInfo['phoneNumber']
            });
            this.loading=false;

        }));


    }
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkuser() {
        if (this.signUpForm.controls.UserName.value.length >= 3) {
            this.authserverService.validateUsername(this.signUpForm.controls.UserName.value).subscribe(
                (res: Boolean) => {
                    this.usernamealeradyexist = res;
                }
            );
        }
    }

    save() {
        if (this.signUpForm.invalid) {
            return;
        }
        this.signUpForm.disable();
        this.authserverService.UpdateUserInfo(this.signUpForm.value).subscribe((res: Boolean) => {

            if(res==true){
                this.toastyService.success(`Done...`);

            }else{

                this.toastyService.error(`Somthing Went Wrong`);

            }
            this.signUpForm.enable();

        });
    }
}
