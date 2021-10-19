export class BookModel{

    constructor(

      public catId?:number,
       public bookTitle?:string,
       public bookAuthor?:string,
       public bookDes?:string,
       public bookISBN?:string,
       public bookYear?:number,
       public bookPrice?:number,
       public bookPos?:number,
       public bookStatus?:boolean,
       public bookImage?:string,
       public bookQty?:number,
       public bookAddedAt?:string,

    ){}
}