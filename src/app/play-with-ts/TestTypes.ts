export class TestTypes {

    var1 = 'test';
    var2: any = 'test any';
    var3: boolean = true;
    var4: number = 5;
    var5: string = 'test string';
    var6: number[] = [1, 2, 3, 4, 5];
    var7: Array<string> = ['test1', 'test2', 'test3'];
    var8: TestEnum = TestEnum.ONE;



    myMethod(): void {
    }


    constructor() {
        console.log(this.var1);
        console.log(this.var2);
        console.log(this.var3);
        console.log(this.var4);
        console.log(this.var5);
        console.log(this.var6);
        console.log(this.var7);
        console.log(this.var8);
        this.functionWithNoParams();
        this.functionWithOneParameter('Method with one parameter - Name');
        this.functionWithManyParameters('test1', 'test2', 5);
        //this.functionWhitReturn('param1_', 'param2_');

        this.var6.forEach(this.functionWithOneParam)

        let x: any = 123;
        let y: any = 456;
        let fieldNameDeducted = { x, y };

        console.log(fieldNameDeducted);

        let dynamicPropertyName = { x, y, getPrefix: this.getPrefix() };

        console.log(dynamicPropertyName);

        let myFunct = function () { };
        let objWithFunction = { x, y, myFunct };
        console.log(objWithFunction);

        console.log(this.myMethodString());
        console.log(this["myMethodString"]());

        let firstArray: number[] = [1, 2, 3];
        let [var1, var2] = firstArray;

        [var1, var2] = [var2, var1];

        let newObject = {firstElem: 3, secondElem: 4};
        let {firstElem, secondElem} = newObject;

        console.log(firstElem);

        let arrayMatching: number[] = [100, 200];
        let [a, b, c, d] = arrayMatching; 

    }

    testLetVarConst() {
        let var1 = 'variable with let';
        console.log(var1);
        console.log(this.var1);
    }


    functionWithNoParams = () => {
        console.log('Parameterless function');
    };

    functionWithOneParameter = (name: string) => {
        console.log(name + ' ' + '_someSuffix');
    }

    functionWithManyParameters = (param1: string, param2: string, param3: number) => {
        console.log(`Many parameters: ${param1} and ${param2} and ${param3}`);
    }

    functionWithReturn = (param1: string, param2: string): string => {
        return param1 + param2
    }

    functionWithOneParam = x => console.log(x);

    getPrefix(): string {
        return 'prefix_';
    }

    myMethodString(): string {
        return 'myMethodString_';
    }


}

export enum TestEnum { ONE, TWO, THREE }