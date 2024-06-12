import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'convertControl'
})
export class ConvertControlPipe implements PipeTransform {

  transform(value: AbstractControl, controlType: string): FormArray | FormGroup | FormControl | any {
    if(controlType === 'FormArray'){
      return value as FormArray;
    }
    else if(controlType === 'FormGroup'){
      return value as FormGroup;
    }
    else if(controlType === 'FormControl'){
      return value as FormControl;
    }
    else{
      return value as AbstractControl
    }
  }

}
