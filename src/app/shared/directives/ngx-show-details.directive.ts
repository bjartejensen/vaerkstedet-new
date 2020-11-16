import { Directive, ViewContainerRef, 
  TemplateRef, OnInit, Input, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ngxShowDetails]'
})
export class NgxShowDetailsDirective implements OnInit {
    
  @Input('ngxShowDetails')
  dataContext: Object;
  
  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

  ngOnInit(){
    this.initTemplate();
  }

  private initTemplate(){
    if(this.dataContext){
      this.viewContainer.clear() //clearing the DOM
      //Instantiating an element in the DOM
      this.viewContainer.createEmbeddedView(
        this.templateRef,this.dataContext
      )
      
    }
  }


}
