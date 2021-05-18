import { Component } from '@angular/core';
import { ProductModel } from './model/Product.model';

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
 
  name: string = 'sebas';
  flag: boolean = true;

  //arreglo con nombres
  itemsName = ['sebas', 'fabio', 'Paula', 'Milet', 'Oscar'];

  // arreglo, cada item es un objeto de producto
  products : ProductModel[]= [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];
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

   /**
    * metodo para eliminar usuarios
    */
    deleteUser(index : number){
      this.itemsName.splice(index, 1);
    }
    /**
     * metodo para agregar usuario
     */

     addUser(name:string){
       this.itemsName.push(name);
     }
}

