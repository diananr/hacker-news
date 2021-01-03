import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DatePipe implements PipeTransform {

  transform(value: string) {
    const dateToTransform = new Date(value);

    const today = new Date();
    if(dateToTransform.getDate() == today.getDate()){
      return moment(value).format('H:mm a');
    } else if(dateToTransform.getDate() == today.getDate() - 1){
      return 'Yesterday';
    } else {
      return moment(value).format('MMM D');
    }

	}

}
