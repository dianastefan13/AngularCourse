export class Promises{

    constructor() {
       let x = 1, y = 1;
       console.log('before');
       let promise = new Promise<any>((resolve, reject) => {
           setTimeout(() => x > 0 ? resolve(x + y) : reject('x should be > 0'), 1);
       })
    promise
       .then(x => console.log(x))
       .catch(err => console.log(err))
    console.log('after');
    }
}