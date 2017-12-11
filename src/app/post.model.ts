export class Post {
  public active: boolean = false;
  constructor(public name: string, public body: string, public date: string, public email: string) {  }
}

// export class Personals extends Post {
//   constructor(public seeking: string) {
//     super();
//   }
// }
//
// export class ForSale extends Post {
//   constructor(public price: string) {
//     super(price);
//   }
// }
//
// export class Housing extends Post {
//   constructor(public location: string, public price: string) {
//     super(location, price);
//   }
// }
