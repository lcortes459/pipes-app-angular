import { Component } from '@angular/core';
import { interval, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Luan Cohera';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changrCliente(): void {
    this.name = 'Nanis RM';
    this.gender = 'female';
  };

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Santiago', 'Camila', 'Nanis', 'Fercha', 'Tokio', 'Simona', 'Chimostrufy', 'Luan', 'Abi'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.shift();
  };

  // Kevalue pipe
  public person = {
    name: 'Luan Cohera',
    age: 39,
    address: 'Bogotá, Colombia'
  };

  // Async pipe

  public myObservableTimer: Observable<number> = interval( 2000 )
    .pipe(
      tap( value => console.log( 'Value =>> ', value ) )
    );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject )  => {

    setTimeout(() => {
      resolve( 'Tenemos data en la promesa' )
      console.log( 'Tenemos data en la promesa' )
    }, 3500);

  });



}
