import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {

    this.menuItems = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
              {
                  label: 'Textos y Fechas',
                  icon: 'pi pi-align-left',
                  routerLink: '/'
              },
              {
                  label: 'Números',
                  icon: 'pi pi-dollar',
                  routerLink: 'numbers'
              },
              {
                  label: 'No comunes',
                  icon: 'pi pi-globe',
                  routerLink: 'uncommon'
              },
              {
                  separator: true
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette',
                          badge: '2'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette',
                          badge: '3'
                      }
                  ]
              }
          ]
      },
      {
        label: 'Pipes de personalizados',
        icon: 'pi pi-cog',
        items: [
            {
                label: 'Custom Pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'
            }
        ]
    },
  ];
  };
}
