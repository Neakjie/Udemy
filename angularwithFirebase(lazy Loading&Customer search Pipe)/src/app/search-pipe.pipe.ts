import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value:any[],searchText:string): any[] {
    if(!value)return[];
    if(!searchText)return value;

    searchText = searchText.toLowerCase();


    return value.filter(item=>{
      return JSON.stringify(item).includes(searchText);
    })
  }

}
