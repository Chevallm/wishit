import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'fi',
  standalone: true
})
export class FiPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return `fi ${value}`;
  }
}
