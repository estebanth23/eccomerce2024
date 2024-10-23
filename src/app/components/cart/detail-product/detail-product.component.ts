import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ItemCart } from '../../../common/item-cart';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit {

  id:number = 0;
  name:string = '';
  description:string = '';
  price:number=0;
  urlImage:string = '';
  quantity:number = 0;

  constructor(private homeService: HomeService, private activateRoute:ActivatedRoute,
    private cartService:CartService, private toastr:ToastrService
  ){}


  ngOnInit(): void {
    this.getProductById();
  }

  getProductById(){
    this.activateRoute.params.subscribe(
      p => {
        let id = p['id'];
        if(id){
          this.homeService.getProductById(id).subscribe(
            data =>{
              this.id = data.id;
              this.name = data.name;
              this.description = data.description;
              this.price = data.price;
              this.urlImage = data.urlImage;
            }
          );
        }
      }
    );
  }

  addCart(id:number){
    let itemCart = new ItemCart(id, this.name, this.quantity, this.price);

    this.cartService.addItemCart(itemCart);

   this.toastr.success("Producto añadido al carrito de compras", 'Carrito Compras')
  }


}
