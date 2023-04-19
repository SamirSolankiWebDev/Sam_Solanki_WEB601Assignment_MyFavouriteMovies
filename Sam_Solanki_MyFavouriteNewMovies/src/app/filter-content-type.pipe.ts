import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContentType'
})
export class FilterContentTypePipe implements PipeTransform {


  transform(contentItem: Content[], filter?: String): any {
    if(!filter){
      return contentItem.filter(item => !item.type);
    }

    return contentItem.filter(item => item.type === filter);
  }
 

}
