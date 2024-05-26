export interface ProductRequest {
    Id?:number;
    name:string;
    amount:number;
    category:number;
    description:string;
}


export interface editAmountRequest {
    Id:number; 
    Amount:number; 
}