import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service'
import { Product } from '../types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: { id: number, name: string, kcal: number, image: string, ingredients: string[], instructions: string }[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.products;
  }

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

  // showRecipe(product: Product) {
  //   this.productService.showProductDetails(product);
  // }
}
