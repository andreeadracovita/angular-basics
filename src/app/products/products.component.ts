import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Duck and rice', kcal: 306, image: 'assets/products/duck-rice.jpeg' },
    { id: 2, name: 'Chicken Florentine', kcal: 201, image: 'assets/products/chicken-florentine.jpeg' },
    { id: 3, name: 'Rainbow veggies', kcal: 150, image: 'assets/products/rainbow-veggies.jpeg'}
  ];

  @Input()
  searchValue: string = '';

  onSearchValueChanged() {
    console.log(this.searchValue);
  }

  leastCaloriesRecipe = this.getLeastCaloriesRecipe();

  getLeastCaloriesRecipe() {
    let productsCopy = [...this.products];
    return productsCopy.sort((curr, next) => curr.kcal - next.kcal)[0];
  }
}
