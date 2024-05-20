import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrl: './topheading.component.css'
})
export class TopheadingComponent implements OnInit{
constructor(private _service:NewsapiserviceService){}
newheadingDisplay:any=[];
ngOnInit() :void{
this._service.topHeading().subscribe((result)=>{
  console.log(result)
  this.newheadingDisplay=result.articles;
})
}
}
