import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContentType',
})
export class FilterContentTypePipe implements PipeTransform {
  transform(contents: Content[], type?: string): Content[] {
    if(!contents){
      return [];
    }

    if (!type){
      return contents.filter(content => !content.type);
    }

    return contents.filter(content => content.type === type);
  }

}