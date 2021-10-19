export class Cart{

    constructor(
       public bookId:number,
       public bookTitle?:string,
       public bookQuantity?:number,
       public price?:number,
       public imageUrl?:string
    ){}
}