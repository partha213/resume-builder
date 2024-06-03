import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent implements OnInit {

  resumeForm = new FormGroup({
    personalDetails:  new FormControl(''),
    professionalSummary: new FormControl(''),
    employmentHistory: new FormControl(''),
    personalInterest: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
    this.resumeForm.valueChanges.pipe(debounceTime(1000)).subscribe((data)=>{
      localStorage.setItem('resumeData',JSON.stringify(data));
      console.log(localStorage.getItem('resumeData'));
    })
  }

}

