import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'textColorMap',
  standalone: true
})
export class TextColorMapPipe implements PipeTransform {

  private readonly colorMap: {[key: string]: string} = {
    'primary': '#ffffff',
    'secondary': '#ffffff',
    'default': '#000000'
  }

  transform(value: string): string {
    return this.colorMap[value] ?? '';
  }


}
