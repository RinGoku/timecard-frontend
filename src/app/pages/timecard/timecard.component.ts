import { Component, OnInit, ViewChild, ElementRef, forwardRef, AfterViewInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tv-schedule',
    templateUrl: './timecard.component.html',
    styleUrls: ['./timecard.component.scss'],
    providers: []
})
export class TimecardComponent implements OnInit {
    selectedDate
    constructor(dateAdapter: DateAdapter<NativeDateAdapter>, private router: Router) {
        dateAdapter.setLocale('jp');
    }
    ngOnInit() {
        this.selectedDate = new Date();
    }
    getChangedValue($event): void {
        this.selectedDate = $event;
    }
}