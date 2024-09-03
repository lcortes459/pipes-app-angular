import { NgModule } from '@angular/core';
// import { MenuModule } from 'primeng/menu';
// import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
// import { BadgeModule } from 'primeng/badge';
// import { AvatarModule } from 'primeng/avatar';
// import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
    // MenuModule,
    // RippleModule,
    // BadgeModule,
    // AvatarModule,
    // InputTextModule

  ]
})
export class PrimeNgModule { }
