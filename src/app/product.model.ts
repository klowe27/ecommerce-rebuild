export class Product {
  constructor (
    public name: string,
    public price: number,
    public colors: string[],
    public sizes: string[],
    public category: string,
    public info: string,
    public images: string[],
    public id: number
  ) { }
}
