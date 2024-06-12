import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmploymentHistoryComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
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
    if(obj.employment)
      obj.employment.forEach((data: any)=>{
        const empForm = this.employmentForm;
        data.tasks.forEach((task:string)=>{
          const taskArr = empForm.get('tasks') as FormArray;
          taskArr.push(new FormControl(task));
        })
        empForm.patchValue(data, { emitEvent: false });
        this.empArr.push(empForm, { emitEvent: false });
      })
  }

  validate() {
    const isNotValid = !(this.primaryForm.valid);
    return isNotValid && {
      invalid: true
    }
  }


  updateValue(){
    this.onChange(this.primaryForm.value);
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
      endDate: new FormControl(''),
      tasks: new FormArray([])
    })

  } 

  constructor() { }

  ngOnInit(): void {
    this.primaryForm.valueChanges.subscribe((data)=>{this.updateValue()})
  }

  get empArr(){
    return this.primaryForm.controls["employment"] as FormArray;
  }

  addEmployment(){
    const empFrm = this.employmentForm;
    const taskArr = empFrm.get('tasks') as FormArray;
    taskArr.push(new FormControl(''));
    this.empArr.push(empFrm);

  }
  removeEmployment(index: number){
    this.empArr.removeAt(index);

  }


  addTask(emp: AbstractControl, e:Event){
    e.stopPropagation();
    const taskArr = emp.get('tasks') as FormArray;
    taskArr.push(new FormControl(''));   
  }

  clear(emp: AbstractControl, idx: number, e:Event){
    if(idx > 0){
      const taskArr = emp.get('tasks') as FormArray;
      taskArr.removeAt(idx);

    }
    
    
  }

}
