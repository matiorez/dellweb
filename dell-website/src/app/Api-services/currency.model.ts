export interface CurrencyResponse{
    effectiveDate:string;
    rates: CurrencyData[];
}

export interface CurrencyData{
    code :string;
    mid:number;
}