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
    personalDetails:  new FormControl('',[Validators.required]),
    professionalSummary: new FormControl('',[Validators.required]),
    employmentHistory: new FormControl(''),
    personalInterest: new FormControl('')
  });

  // sectionConfig=[
  //   {
  //     header: "Personal Details",
  //     tag: "app-personal-details",
  //     icon: "account_circle"
  //   },
  //   {
  //     header: "Professional Summary",
  //     tag: "app-professional-summary",
  //     icon: "business_center"
  //   },
  //   {
  //     header: "Employment History",
  //     tag: "app-employment-history",
  //     icon: "account_circle"
  //   },
  //   {
  //     header: "Personal Interest",
  //     tag: "app-personal-interest",
  //     icon: "account_circle"
  //   }
  // ];


  sectionConfig=[
      {
        header: "Personal Details",
        control: "personalDetails",
        icon: "account_circle"
      },
      {
        header: "Professional Summary",
        control: "professionalSummary",
        icon: "business_center"
      }
  ]

  constructor() { }

  ngOnInit(): void {
    this.resumeForm.valueChanges.pipe(debounceTime(1000)).subscribe((data)=>{console.log(data)})
  }

    step = 0;
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }

}

