import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-desktop',
  templateUrl: './contact-desktop.component.html',
  styleUrls: ['./contact-desktop.component.scss']
})
export class ContactDesktopComponent implements OnInit {

  contactForm: FormGroup;
  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  content:string[]=[];

  feedback$:Observable<any>;
  errorMessage$: Observable<string>;

  showSpinner$: Observable<boolean>;

  constructor(private layoutService:LayoutService,private contactService:ContactService,
    private route: ActivatedRoute) { 
      this.showSpinner$ = this.contactService.showSpinner$;
}
ngOnInit(): void {

  this.setHeader();
  this.setContent();

  this.route.paramMap.subscribe((params) => {
    let id = params.get("id");

    if (id) {
      this.setPristineForm("Vedr: " + id);
    } else {
      this.setPristineForm();
    }

  });

}

private setHeader(){
  this.header = this.contactService.getHeader();
}

private setContent(){
  this.content = this.contactService.getContent();
}

onSubmit(){
  let from = this.contactForm.value.senderEmail;
  let subject = this.contactForm.value.subject;
  let message =this.contactForm.value.message;

  this.feedback$ = this.contactService.sendEmail(from,subject,message);

  this.feedback$.subscribe(m=>{},
    err => {
        this.errorMessage$ = of(err);
    } 
  )

}

  private setPristineForm(mailSubject: string = ""){
    this.contactForm = new FormGroup({
      senderEmail: new FormControl("", [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl("", [
        Validators.required,
      ]),
      message: new FormControl("", [Validators.required]),
      subscribeToNewsletter: new FormControl(),
    });
  }
}
