class Product {
  constructor(url, name, price, description, category) {
    this.url = url;
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.id = uuid.v4();
  }
}
export {Product};