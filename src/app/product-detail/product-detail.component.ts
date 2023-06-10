import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../types/product';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

  product: Product | undefined = undefined;
  productId: number = -1;
  routeParamObs: Subscription | undefined = undefined;

  ngOnInit(): void {
    // this.productService.onShowDetailsClicked.subscribe((data: Product) => {
    //   this.product = data;
    // });

    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.productId = Number(param.get('id'));
      this.product = this.productService.products.find(x => x.id == this.productId);
    })
  }

  ngOnDestroy() {
    if (this.routeParamObs) {
      this.routeParamObs.unsubscribe();
    }
  }
}
