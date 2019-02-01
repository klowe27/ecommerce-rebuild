import { Product } from './product.model'

export class CartItem {
  constructor (
    public productId: string,
    public quantity: number,
    public color: string = 'N/A',
    public size: string = 'N/A',
  ) { }
}