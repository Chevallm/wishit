import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  wishs: {title: string, price: number, gifter?: string}[] = [
    {
      title: 'Playstation 5',
      price: 500,
      gifter: 'azeaz6+5fz1f65az'
    },
    {
      title: 'Maillot du XV de France',
      price: 90.50
    },
    {
      title: 'Place de concert',
      price: 40,
    }
  ]

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.wishs, event.previousIndex, event.currentIndex);
  }

  add(title: string, price: number): void {
    this.wishs.push({title, price});
  }

}
