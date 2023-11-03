import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorMap'
})
export class ColorMapPipe implements PipeTransform {

  private readonly colorMap: {[key: string]: string} = {
    'primary': '#135CFE',
    'secondary': '#FE483B',
    'default': '#ffffff'
  }

  transform(value: string): string {
    return this.colorMap[value] ?? '';
  }

}
