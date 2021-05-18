import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  // variables
  valueData : string = '';

  obgFrutas = ['banano', 'fresa','mora','manzana','pera'];

  // metodos

  /**
   * netodo de añadir fruta
   */
   addFruit (asFruit : string){
     if(!this.obgFrutas.includes(asFruit)){
      this.obgFrutas.push(asFruit);
     }else{
      this.valueData = 'Lo sentimos, ya existe este valor';
     }
     
   }

   /**
    * metodo de eliminar fruta 
    */
   deleteFruit (index : number){
     this.obgFrutas.splice(index, 1);
   }
}

