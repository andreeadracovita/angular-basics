import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private productService: ProductService) {}

  product: Product | undefined = undefined;

  ngOnInit(): void {
    this.productService.onShowDetailsClicked.subscribe((data: Product) => {
      this.product = data;
    });
  }
}
