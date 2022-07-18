import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {Event} from '../../models/event';
import { EventService } from '../../services/event.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  public Editor = ClassicEditor;

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  timeStart = { hour: 12, minute: 0 };
  timeEnd = { hour: 12, minute: 0 };
  spinnerStart = false;
  spinnerEnd = false;
  meridianStart= true;
  meridianEnd= true;

  faCalendar = faCalendar;
  file:any;
  event: Event={
    name: '',
    description: '',
    title: '',
    startDateEvent: '',
    eventDateEvent: '',
    hour: '',
    cost: '',
    modality: '',
    link: '',
    cityId: '',
    provinceId: '',
    typeEventId: '',
    eventFromId: '',
    ticketPriceId: '',
    createdByUser: 'admin',
  }

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private eventService: EventService,
    private toastr: ToastrService
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onFileChange(event: any){
    this.file = event.target.files;
  }

  createEvent(){
    console.log(this.event);
    //console.log(this.file);
    this.eventService.createEvent(this.event).subscribe(
      (res)=>{
        this.toastr.success('Evento creado');
      },
      (err)=>{
        console.log(err);
        this.toastr.error('Ops tenemos promemas con el servidor')
      }
    );
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }

  ngOnInit(): void {}
}
