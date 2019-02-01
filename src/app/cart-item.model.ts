import { Product } from './product.model'

export class CartItem {
  constructor (
    public product: Product,
    public quantity: number,
    public color: string = '',
    public size: string = '',
  ) { }
}
