export class UsedCar{
  id?:number;
  model?: string;
  brand?: string;
  price?:number;
  location?:string;
  seatingCapacity?:number;
  mileage?:number;
  color?: string;
  description?:string;
  year?:number;
  engineNum?:string;
  registrationNum?:string;
  ownership?:number;
  transmissionType?: string;
  fuelType?: string;
  status?:string;
  imagePath?: string;

  constructor(id?:number,model?:string,brand?: string,price?:number,location?:string, seatingCapacity?:number,mileage?:number, color?: string,description?:string,year?:number,engineNum?:string, registrationNum?:string, ownership?:number, transmissionType?: string,fuelType?: string,status?:string,imagePath?: string) {
    this.id = id;
    this.model = model;
    this.brand = brand;
    this.price=price;
    this.location=location;
    this.seatingCapacity=seatingCapacity;
    this.mileage=mileage;
    this.color = color;
    this.description=description;
    this.year=year;
    this.engineNum=engineNum;
    this.registrationNum=registrationNum;
    this.ownership=ownership;
    this.transmissionType = transmissionType;
    this.fuelType = fuelType;
    this.status=status; 
    this.imagePath=imagePath;
  }
}