import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-skill-summary',
  templateUrl: './skill-summary.component.html',
  styleUrls: ['./skill-summary.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SkillSummaryComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SkillSummaryComponent),
      multi: true
    }
  ]
})
export class SkillSummaryComponent implements OnInit, ControlValueAccessor {
  skillList = new Set();
  skill = "";


  constructor() { }

  private onChange : any;
  private onTouched : any;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string[]): void {

    this.skillList.clear();
    if(obj.length){
      obj.forEach(item => this.skillList.add(item));
    } 
  }

  validate() {
    const isNotValid = !(this.skillList.size > 0) ;
    return isNotValid && {
      invalid: true
    }
  }

  updateValue(){
    this.onChange(Array.from(this.skillList));
    this.onTouched();
  }

  ngOnInit(): void {
  }

  addSkill(){
    if(this.skill){
      this.skillList.add(this.skill); 
      this.skill='';
    }
    this.updateValue();
  }

  removeSkill(int: any){
    this.skillList.delete(int);
    this.updateValue();
  }
}
