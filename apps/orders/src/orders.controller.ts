import { Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  creatOrder() {
    console.log('create order')
  }
}
