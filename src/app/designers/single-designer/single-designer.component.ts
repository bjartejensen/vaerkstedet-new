import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SocialMediaLink, SingleDesigner } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-designer',
  templateUrl: './single-designer.component.html',
  styleUrls: ['./single-designer.component.scss']
})
export class SingleDesignerComponent implements OnInit, OnChanges {

  singleDesigner:SingleDesigner;

  constructor(private route: ActivatedRoute) { 

      this.route.params.subscribe(x=>{
        this.singleDesigner = this.route.snapshot.data["singleDesigner"];
      })

    }

  ngOnChanges(){}

  ngOnInit(): void { }

  

  
}
