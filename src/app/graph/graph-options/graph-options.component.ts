import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-options-graph',
    templateUrl: './graph-options.component.html',
    styleUrls: ['./graph-options.component.scss']
  })
export class GraphOptionsComponent {
    private fromDate: Date;
    private toDate: Date;

    @Output() fetchNew = new EventEmitter<void>();
    @Output() newFromDate = new EventEmitter<Date>();
    @Output() newToDate = new EventEmitter<Date>();

    fromTimeFocusOut(timeValue: string) {
        this.setNewDateTime(this.fromDate, timeValue);
        this.newFromDate.emit(this.fromDate);
    }

    toTimeFocusOut(timeValue: string) {
        this.setNewDateTime(this.toDate, timeValue);
        this.newToDate.emit(this.toDate);
    }

    OnFromDateChange(fromDate: Date) {
        console.log(fromDate);
        this.fromDate = fromDate;
        this.newFromDate.emit(this.fromDate);
    }

    OnToDateChange(toDate: Date) {
        console.log(toDate);
        this.toDate = toDate;
        this.newToDate.emit(this.toDate);
    }

    onFetch(): void {
        this.fetchNew.emit();
    }

    private setNewDateTime(date: Date, timeValue: string) {
        const regex = /(\d{2}):(\d{2}):(\d{2})/;
        const timeArr = regex.exec(timeValue);
        date.setHours(Number(timeArr[1]));
        date.setMinutes(Number(timeArr[2]));
        date.setSeconds(Number(timeArr[3]));
    }

  }
