import { NgIterable, Pipe, PipeTransform } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Pipe({
  standalone: true,
  name: 'iterableValidationErrors'
})
export class IterableValidationErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors | null): NgIterable<string> {
    return Object.values<string>(value ?? {});
  }
}