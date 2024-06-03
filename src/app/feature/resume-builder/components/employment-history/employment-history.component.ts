import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmploymentHistoryComponent),
      multi: true
    }
  ]
})
export class EmploymentHistoryComponent implements OnInit, ControlValueAccessor {

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
    if(this.primaryForm.valid){
      this.onChange(this.primaryForm.value);
    }
    this.onTouched();
    
  }

  primaryForm = new FormGroup({
    employment: new FormArray([])
  }); 

  get employmentForm(){
    return new FormGroup({
      role: new FormControl('',[Validators.required]),
      organization: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('')
    })

  } 

  constructor() { }

  ngOnInit(): void {
    this.primaryForm.valueChanges.subscribe((data)=>{this.updateValue()})
  }

  get empArr(){
    return this.primaryForm.controls["employment"] as FormArray;
  }

  formGrp(emp: any){
    return emp as FormGroup;
  }

  addEmployment(){
    this.empArr.push(this.employmentForm);

  }
  removeEmployment(index: number){
    this.empArr.removeAt(index);

  }

}
