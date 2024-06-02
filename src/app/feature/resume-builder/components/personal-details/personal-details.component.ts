import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalDetailsComponent),
      multi: true
    }
  ]
})
export class PersonalDetailsComponent implements OnInit, ControlValueAccessor {

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
    const val: any = {};
    if(this.personalForm.valid){
      val.personalInfo = this.personalForm.value;
    }
    if(this.additionalForm.valid && this.additionalData){
      val.additionalInfo = this.additionalForm.value;
    }
    this.onChange(val);
    this.onTouched();
  }
  

  additionalData = false;
  personalForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',),
    city: new FormControl('',),
    country: new FormControl('',),
  });

  additionalForm = new FormGroup({
    address: new FormControl(''),
    pin: new FormControl(''),
    dateOfBirth: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
    this.personalForm.valueChanges.subscribe((data)=>{this.updateValue()})
    this.additionalForm.valueChanges.subscribe((data)=>{this.updateValue()})
  }

}
