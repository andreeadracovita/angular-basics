import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { id: 1, name: 'Duck and rice', kcal: 306, image: 'assets/products/duck-rice.jpeg', ingredients: ['duck breast', 'rice', 'hoisin sauce'], instructions: 'Cook duck breast. Cook rice. Plate and pour hoisin sauce on top.' },
    { id: 2, name: 'Chicken Florentine', kcal: 201, image: 'assets/products/chicken-florentine.jpeg', ingredients: ['chicken breast', 'cream', 'spinach'], instructions: 'Cook chicken breast. Add spinach and sautee. Add cream and season.' },
    { id: 3, name: 'Rainbow veggies', kcal: 150, image: 'assets/products/rainbow-veggies.jpeg', ingredients: ['carrot', 'beet', 'bell pepper'], instructions: 'Cut all vegetables. Sautee on high heat. Season with salt and pepper.'}
  ];

  constructor() { }

  onShowDetailsClicked = new EventEmitter<Product>();

  showProductDetails(product: Product) {
    this.onShowDetailsClicked.emit(product);
  }
}
