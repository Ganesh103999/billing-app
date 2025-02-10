import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-billing-table',
  standalone: true,
  imports:  [FormsModule,  CommonModule,CurrencyPipe],
  templateUrl: './billing-table.component.html',
  styleUrl: './billing-table.component.css',
  providers: [CurrencyPipe]
})
export class BillingTableComponent {
  items: any[] = [];
  newItem: any = { name: '', quantity: 0, price: 0 };

  addItem() {
    this.items.push({ ...this.newItem });
    this.newItem = { name: '', quantity: 0, price: 0 }; // Reset form
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
  }

  getAverageTotal() {
    if (this.items.length === 0) {
      return 0; // Avoid division by zero
    }
    return this.getTotal() / this.items.length;
  }
  

}
