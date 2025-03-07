import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Newsletterecommerce, newsletterecommerceinit } from 'src/app/shared/Models/newsletterecommerce';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-newsletter-menu',
  templateUrl: './newsletter-menu.component.html',
  styleUrls: ['./newsletter-menu.component.scss'],
  standalone: true,
  imports:[CommonModule, FormsModule, ReactiveFormsModule]
})
export class NewsletterMenuComponent implements OnInit {
  @Output() closeMenu: EventEmitter<void> = new EventEmitter<void>();
  news: Newsletterecommerce = newsletterecommerceinit;
  signInForm: UntypedFormGroup = this._formBuilder.group({
    Email: ['', [Validators.required]],
  });;
  constructor(private _formBuilder: UntypedFormBuilder, public store: StoreService, private toastyService: ToastrService
  ) {

    this.store.getnewsletterecommerce().subscribe((res: Newsletterecommerce) => {
      //Console.log(res);
      this.news = res;
    });
  }

  ngOnInit(): void {
  }
  Subscribe() {

    if (this.signInForm.invalid) {
      return;
    }
    this.signInForm.disable();
    this.store.inseremail
      (this.signInForm.value.Email,this.news.ID||1)
      .subscribe((c: any) => {
        //Console.log(c);
        if (c.status == true) {
          this.toastyService.success(c.msg);
          this.signInForm.enable();
        } else if (c.status == false) {
          this.toastyService.warning(c.msg);
          this.signInForm.enable();
        }
        else if (!c) {
          this.signInForm.enable();
        }
      },
        err => {
          if (err.status == 400) {
            //Console.log(err);
            alert(err.error.message);
          }
        });


  }
}
