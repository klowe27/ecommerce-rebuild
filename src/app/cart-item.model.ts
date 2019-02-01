import { Product } from './product.model'

export class CartItem {
  constructor (
    public name: string,
    public quantity: number,
    public color: string = 'N/A',
    public size: string = 'N/A',
  ) { }
}
