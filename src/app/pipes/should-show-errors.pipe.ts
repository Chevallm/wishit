import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'shouldShowErrors',
  pure: false
})
export class ShouldShowErrorsPipe implements PipeTransform {

  transform(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched)
  }

}
