type GUID = string & { isGuid: true};

export interface editProductRequest {
    Id:GUID; 
    Name:string; 
    Amount:number; 
    EAN13:string; 
    Description:string
}


export interface editAmountRequest {
    Id:GUID; 
    Amount:number; 
}