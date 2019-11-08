export class TestFunctionClass{
    field1 = 1;
    field2 = 2;


    myMethod(){
        //let that = this;
        let firstFunction = function(param1){
            return this.field1 + param1;
        }.bind(this);

        let secondFunction = (param2) => {
            return this.field2 + param2;
        }

        console.log(firstFunction('param1'));
        console.log(secondFunction('param2'));
    }
    
}