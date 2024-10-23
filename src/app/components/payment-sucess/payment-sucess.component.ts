import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { OrderState } from '../../common/order-state';

@Component({
  selector: 'app-payment-sucess',
  templateUrl: './payment-sucess.component.html',
  styleUrl: './payment-sucess.component.css'
})
export class PaymentSucessComponent implements OnInit{
  
  constructor(
    private orderService: OrderService,
    private sessionStorage: SessionStorageService
  ){}


  ngOnInit(): void {
   console.log(this.sessionStorage.getItem('order'));
   let order = this.sessionStorage.getItem('order');

   let formData = new FormData();

   formData.append('id', order.id);
   formData.append('state', OrderState.CONFIRM.toString());

   this.orderService.updateOrder(formData).subscribe(
    data => console.log(data)
   );

  }

}
