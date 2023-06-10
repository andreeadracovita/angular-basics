import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [ProductService]
})
export class ContainerComponent {
    searchValue: string = '';

    onSearchValueEntered(searchValue: string) {
        this.searchValue = searchValue;
    }
}