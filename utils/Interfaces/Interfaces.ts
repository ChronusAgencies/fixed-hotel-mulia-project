export interface IDataChat {
    userMessage : string,
    messageTime : number | string,
}

export interface IBookingData{
    properties : string,
    checkInDate : Date | string,
    checkOutDate : Date | string,
    childPerson : string | number | null,
    adultPerson : string | number | null,
    referalCode? : string | number | null 
}