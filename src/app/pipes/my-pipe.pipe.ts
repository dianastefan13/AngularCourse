import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../model/hero';

@Pipe({
  name: 'myPipe',
  pure: false
})
export class MyPipePipe implements PipeTransform {

  transform(value: Hero, times: number): any {
    console.log('pipe was called');
    if(!value){
      return '';
    }
    return Math.pow(value.id, times != null ? times : 2 );
  }

}
