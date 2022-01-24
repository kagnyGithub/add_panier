import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, filterName: string):any {
    const resultat: any=[];
    if(!value || filterString =='' || filterName==''){
      return value;
    }
    value.forEach(
      (a:any)=>{
        if(a[filterName].trim().toLowerCase().includes(filterString.toLocaleLowerCase())){
          resultat.push(a);
        }
      }
    )
    return resultat;
  }

}
