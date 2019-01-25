import { Product } from './product.model'

export const PRODUCTS: Product[] = [
  new Product("Pride Tshirt", 24, ["gray", "black", "red"], ["Small", "Medium", "Large", "XLarge", "2XLarge"], "T-Shirt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, true, ["flag.jpg", "flag.jpg", "flag.jpg"], 1),
  new Product("Pride Sweatshirt", 45, ["gray", "green", "red"], ["Small", "Medium", "Large", "XLarge", "2XLarge"], "Sweatshirt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", true, true, ["flag.jpg", "flag.jpg", "flag.jpg"], 2),
  new Product("Pride Poster", 5, [], [], "Accessory", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", true, false, ["flag.jpg", "flag.jpg", "flag.jpg"], 3),
  new Product("Pins", 5, [], [], "Accessory", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", true, false, ["flag.jpg", "flag.jpg", "flag.jpg"], 4),
  new Product("Feminist Tshirt", 24, ["gray", "black", "purple"], ["Medium", "Large", "XLarge", "2XLarge"], "T-Shirt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, true, ["flag.jpg", "flag.jpg", "flag.jpg"], 5),
  new Product("Feminist Sweatshirt", 24, ["gray", "black", "red"], ["Small", "Medium", "Large", "XLarge", "2XLarge"], "Sweatshirt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", true, false, ["flag.jpg", "flag.jpg", "flag.jpg"], 6),
  new Product("Pride Tshirt", 24, ["gray", "purple", "red"], ["Small", "Medium", "XLarge", "2XLarge"], "Accessory", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, false, ["flag.jpg", "flag.jpg", "flag.jpg"], 7),
  new Product("Pride Tshirt", 24, ["green", "black", "blue"], ["Small", "Medium", "Large", "XLarge", "2XLarge"], "T-Shirt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, false, ["flag.jpg", "flag.jpg", "flag.jpg"], 8),
  new Product("Feminist Tank", 18, ["gray", "black", "blue"], ["Medium", "Large", "XLarge", "2XLarge"], "Tank", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", true, true, ["flag.jpg", "flag.jpg", "flag.jpg"], 9),
  new Product("Pride Tank", 18, ["green", "black", "red"], ["Small", "XLarge", "2XLarge"], "Tank", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", false, true, ["flag.jpg", "flag.jpg", "flag.jpg"], 10),
];
