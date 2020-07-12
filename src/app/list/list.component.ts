import { Component } from '@angular/core';
import { DataService } from '../data.service';


// class Item {
//   title: string;
//   price: number;
//   description: string;
//
//   constructor(title: string, price: number, description: string) {
//
//     this.title = title;
//     this.price = price;
//     this.description = description;
//   }
// }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {

  title: string;
  description: string;
  price: number;


  items: DataService[] =
  [
    { title: "Хлеб", price: 50, description: 'Белый ЯХК' },
    { title: "Яйцо", price: 70, description: 'куриное' },
    { title: "Молоко", price: 60, description: 'обезжиренное' }
  ];

  deleteItem(item: string, itemId: number): void {
    if (itemId !== -1) {
      this.items.splice(itemId, 1);
    }
  }
}
