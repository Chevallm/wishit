import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  listTitle: string = 'Untitled list';

  form = new FormGroup({
    title: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.min(0))
  })

  wishs: {title: string, price?: number, gifter?: string}[] = [
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
  ];

  addForm = new FormGroup({
    title: new FormControl('')
  })

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.wishs, event.previousIndex, event.currentIndex);
  }

  add(title: string, price?: string): void {
    if (this.form.valid) {
      const priceValue = price ? Number(price) : undefined;
      this.wishs.push({title, price: priceValue});
      this.form.reset();
    }
  }

}
