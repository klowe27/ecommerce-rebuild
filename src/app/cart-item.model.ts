import { Product } from './product.model'

export class CartItem {
  constructor (
    public product: object,
    public quantity: number,
    public size: string,
    public color: string
  ) { }
}
