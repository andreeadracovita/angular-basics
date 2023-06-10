import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  searchValue: string = '';

    onSearchValueEntered(searchValue: string) {
        this.searchValue = searchValue;
    }
}
