export interface User {
    username: string;
    password: string;
  }
  
  export interface Customer {
    id:string
    name: string;
    address: string;
    phoneNumber: string;
    user: User;
  }