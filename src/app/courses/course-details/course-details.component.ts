import { Component,OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit,OnDestroy {
  id;
  private _routeParamsSub: Subscription;
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
   this._routeParamsSub = this._route.paramMap.subscribe(paramMap =>{
     console.log(paramMap);
     this.id = paramMap.has('id')?
     paramMap.get('id') : null;
   });

  }

  ngOnDestroy() : void {
    this._routeParamsSub.unsubscribe();
  }

}
