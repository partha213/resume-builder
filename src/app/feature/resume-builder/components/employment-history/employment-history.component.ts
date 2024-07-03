import { Component, ElementRef, forwardRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

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
      endDate: new FormControl('',[Validators.required]),
      currentRole: new FormControl(false),
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


  addTask(emp: AbstractControl, e:Event, empIdx: number, taskIdx: number){
    const taskArr = emp.get('tasks') as FormArray;
    taskArr.insert(taskIdx+1 , new FormControl(''));  
    setTimeout(()=>{
      document.getElementById(empIdx+'_'+(taskIdx+1))?.focus()
    },0) 
    
  }

  clear(emp: AbstractControl,empIdx: number, taskIdx: number, e:any){
    const inputVal = e.target?.value;
    if((taskIdx > 0) && !(inputVal) ){
      const taskArr = emp.get('tasks') as FormArray;
      taskArr.removeAt(taskIdx);
      document.getElementById(empIdx+'_'+(taskIdx-1))?.focus();
    }
  }

  currentRoleAction(idx: number, event: any){
    const endDateControl: FormControl = this.empArr.controls[idx].get('endDate') as FormControl;
    if(event.checked){
      endDateControl.disable();
      endDateControl.setValue('');
      endDateControl.removeValidators(Validators.required);
    }
    else{
      endDateControl.enable();
      endDateControl.addValidators(Validators.required); 
    }

    endDateControl.updateValueAndValidity();
    

  }

}
