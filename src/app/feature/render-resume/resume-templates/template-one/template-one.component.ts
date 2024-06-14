import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.scss']
})
export class TemplateOneComponent implements OnInit {

  constructor() { }
  resumeData : any;

  ngOnInit(): void {
    const data = localStorage.getItem('resumeData');
    if(data){
      this.resumeData = JSON.parse(data);
    }
    
  }

  avaterImage(){
    return localStorage.getItem('avaterImg');
  }

}
