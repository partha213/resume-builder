import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-personal-interest',
  templateUrl: './personal-interest.component.html',
  styleUrls: ['./personal-interest.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalInterestComponent),
      multi: true
    }
  ]
})
export class PersonalInterestComponent implements OnInit, ControlValueAccessor {
  interestList = new Set();
  interest = "";


  constructor() { }

  private onChange : any;
  private onTouched : any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    // this.personalForm.setValue(obj.personalInfo, { emitEvent: false });
    // this.additionalForm.setValue(obj.additionalInfo, { emitEvent: false });
  }

  updateValue(){
    this.onChange(this.interestList.values());
    this.onTouched();
  }

  ngOnInit(): void {
  }

  addInterest(){
    if(this.interest){
      this.interestList.add(this.interest); 
      this.interest='';
    }
    this.updateValue();
  }

  removeInterest(int: any){
    this.interestList.delete(int);
    this.updateValue();
  }
}
