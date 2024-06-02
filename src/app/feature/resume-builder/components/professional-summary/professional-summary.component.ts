import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfessionalSummaryComponent),
      multi: true
    }
  ]
})
export class ProfessionalSummaryComponent implements OnInit, ControlValueAccessor {

  profSummaryForm = new FormGroup({
    profSummary: new FormControl('',[Validators.required])
  })

  

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
    if(this.profSummaryForm.valid){
      this.onChange(this.profSummaryForm.value);
    }
    this.onTouched();
    
  }

  constructor() { }

  ngOnInit(): void {
    this.profSummaryForm.valueChanges.subscribe((data)=>{this.updateValue()})
  }

}
