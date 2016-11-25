export class Service {
   id: number;
   title: string;
   city: string;
   price: number;
   description: string;
   imgSRC: string;

   constructor(service){
       this.id = service.id || null ;
       this.title = service.title || '';
       this.city = service.city || '';
       this.price = service.price || null;
       this.description = service.description  || '';
       this.imgSRC = service.imgSRC || '';
   }
}