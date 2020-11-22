import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { loadUnload } from 'src/app/animations';
import { LayoutService } from 'src/app/services/layout.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations:[loadUnload,
    trigger("fade",
    [
      state("*",style({opacity:1})),
      state("shown",style({opacity:0})),
      transition(":enter",[
        style({opacity:0}),
        animate(400)
      ]),
      transition("*=>shown",[
        style({opacity:1}),
        animate("400ms 5000ms")
      ])
    ])]
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isMobile$:Observable<boolean> = this.layoutService.isMobile$;
  isDesktop$: Observable<boolean> = this.layoutService.isDesktop$;
  
  header:string;
  content:string[]=[];

  feedback$:Observable<any>;
  errorMessage$: Observable<string>;

  showSpinner$: Observable<boolean>;

  state:string;
  
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

  onFadeDone(event){
    this.state ="shown";    
  }

  onSubmit(){
    let from = this.contactForm.value.senderEmail;
    let subject = this.contactForm.value.subject;
    let message =this.contactForm.value.message;

    this.feedback$ = this.contactService.sendEmail(from,subject,message);

    this.feedback$.subscribe(m=>{
          
    },
      err => {
          this.errorMessage$ = of(err);
      } 
    )

  }

  private setPristineForm(mailSubject: string = ""){
    this.contactForm = new FormGroup({
      senderEmail: new FormControl("bjartejensen@gmail.com", [
        Validators.required,
        Validators.email,
      ]),
      subject: new FormControl("Test", [
        Validators.required,
      ]),
      message: new FormControl("Dette er en test", [Validators.required]),
      subscribeToNewsletter: new FormControl(),
    });
  }

}
