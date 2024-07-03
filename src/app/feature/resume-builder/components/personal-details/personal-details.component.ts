import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalDetailsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
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
    if(obj.personalInfo){
      this.personalForm.patchValue(obj.personalInfo, { emitEvent: false });
    }
    if(obj.additionalInfo){
      this.additionalForm.patchValue(obj.additionalInfo, { emitEvent: false });
    }
    
   
  }

  validate() {
    const isNotValid = !(this.personalForm.valid && this.additionalForm.valid);
    return isNotValid && {
      invalid: true
    }
  }

  updateValue(){
    const val: any = {};
   
      val.personalInfo = this.personalForm.value;
      val.additionalInfo = this.additionalForm.value;
      this.onChange(val);
      this.onTouched();
  }
  

  get additionalData(){
    return this.personalForm.get('additionalData')!.value
  } 
  personalForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.pattern("[1-9][0-9]{9}")]),
    city: new FormControl('',),
    country: new FormControl('',),
    additionalData: new FormControl(false,)
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

  onFileChange(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result as string;
      localStorage.setItem('avaterImg', base64String);
    }

    if(file){
      reader.readAsDataURL(file);
    }
     
  }

  get avaterImage(){
    return localStorage.getItem('avaterImg');
  }

  removeAvatarImg(){
    localStorage.removeItem('avaterImg');

  }
 
}
