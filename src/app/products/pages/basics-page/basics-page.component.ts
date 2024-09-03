import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'luan';
  public nameUpper: string = 'LUAN';
  public nameFull: string = 'lUaN cOhErA';
  public customeDate: Date = new Date();
}
