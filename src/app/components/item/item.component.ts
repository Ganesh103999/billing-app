import { Component, inject } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private itemService = inject(ItemService);
  items: any[] = [];

  constructor() {
    this.loadItems();  // Load data when component starts
  }

  loadItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }
}
