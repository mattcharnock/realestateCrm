import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearSpaces'
})
export class ClearSpacesPipe implements PipeTransform {

  transform(str: string): any {
    return str.replace(/\s/g, '')
  }

}
