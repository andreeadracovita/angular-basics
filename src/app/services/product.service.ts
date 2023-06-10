import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    { id: 1, name: 'Duck and rice', kcal: 306, image: 'assets/products/duck-rice.jpeg' },
    { id: 2, name: 'Chicken Florentine', kcal: 201, image: 'assets/products/chicken-florentine.jpeg' },
    { id: 3, name: 'Rainbow veggies', kcal: 150, image: 'assets/products/rainbow-veggies.jpeg'}
  ];

  constructor() { }
}
