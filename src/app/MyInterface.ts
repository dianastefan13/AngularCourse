export interface MyInterface{

}

export class MyClass implements MyInterface{
    myFirstMethod(){
        console.log('cannot see me');
    }
}