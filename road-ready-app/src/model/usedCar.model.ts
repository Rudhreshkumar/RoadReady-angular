export class UsedCar{
  id:number;
  brand?: string;
  color?: string;
  model?: string;
  fuelType?: string;
  transmissionType?: string;
  location?:string;
  mileage?:number;
  year?:number;
  price?:number;
  imagePath?: string;

  constructor(id: number,brand?: string, color?: string, model?: string, fuelType?: string, transmissionType?: string,location?:string,mileage?:number,year?:number,price?:number,imagePath?: string) {
    this.id = id;
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.fuelType = fuelType;
    this.transmissionType = transmissionType;
    this.location=location;
    this.mileage=mileage;
    this.year=year;
    this.price=price;
    this.imagePath=imagePath;
  }
}