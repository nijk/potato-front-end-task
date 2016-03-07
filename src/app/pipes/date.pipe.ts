/**
 * Created by nijk on 04/03/2016.
 */

import {Pipe, PipeTransform} from 'angular2/core';
import * as moment from 'moment';

/*
 * Creates a friendly date format
 */
@Pipe({name: 'friendlyDate'})
export class FriendlyDatePipe implements PipeTransform {
    transform(value: number) : any {
        return moment(value).format('Do MMM YYYY');
    }
}
