import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emit } from 'process';
import { Observable, of } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { NewsletterService } from '../newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  signUpForm: FormGroup;

  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  content:string[]=[];

  feedback$:Observable<any>;
  errorMessage$: Observable<string>;

  showSpinner$: Observable<boolean>;
  
  constructor(private layoutService:LayoutService,
      private newsletterService:NewsletterService) { }

  ngOnInit(): void {

    this.setHeader();
    this.setContent();

    this.setPristineForm();
  }

  private setPristineForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  private setHeader(){
    this.header = this.newsletterService.getHeader();
  }

  private setContent(){
    this.content = this.newsletterService.getContent();
  }

  public onNewsletterSubscribe(){

    let email =this.signUpForm.value.email;
    this.feedback$ = this.newsletterService.newsletterSubscribe(email);

    this.feedback$.subscribe(m=>{},
      err => {
          this.errorMessage$ = of(err);
      } 
    )
  }

}
