import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../newsapiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrl: './technews.component.css'
})
export class TechnewsComponent implements OnInit{
  constructor(private _service:NewsapiserviceService){}
  technewsDisplay:any=[];
  ngOnInit() :void{
  this._service.technews().subscribe((result)=>{
    console.log(result)
    this.technewsDisplay=result.articles;
  })
  }
  }