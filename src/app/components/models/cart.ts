export class Cart{

    constructor(
       public bookId?:number,
       public bookTitle?:string,
       public bookQuantity?:number,
       public bookPrice?:number,
       public bookImage?:string
    ){}
}