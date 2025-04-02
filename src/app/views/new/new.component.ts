import {CdkDragDrop, moveItemInArray as moveWishInList} from '@angular/cdk/drag-drop';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Wish} from 'src/app/definitions/wish';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";

@Component({
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    standalone: false
})
export class NewComponent {

  firestore = inject(Firestore);
  wishlistCollection = collection(this.firestore, 'wishlist');

  listTitle: string = 'Untitled list';

  form = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    price: new FormControl<string>('', Validators.min(0))
  })

  wishs: Wish[] = [
    {
      title: 'Playstation 5',
      price: 500,
      gifter: 'azeaz6+5fz1f65az',
    },
    {
      title: 'Maillot du XV de France',
      price: 90.50,
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
    moveWishInList(this.wishs, event.previousIndex, event.currentIndex);
  }

  add(): void {
    if (this.form.valid) {
      const wish: Wish = {
        title: this.form.controls.title.value!,
        price: parseFloat(this.form.controls.price.value ?? '') ?? undefined
      }
      this.wishs.push(wish);
      this.form.reset();
    }
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    //addDoc(this.wishlistCollection, {...this.form.value});
  }

}
