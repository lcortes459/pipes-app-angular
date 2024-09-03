import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {

  public isToggleCase: boolean = false;

  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterba Verde',
      canFly: true,
      color: Color.gree
    },
  ]

  changeToUpperCase(): void {
    this.isToggleCase = !this.isToggleCase;
  };

  changeToSortBy( key: keyof Hero ): void {
    this.sortBy = key;
  };

}
