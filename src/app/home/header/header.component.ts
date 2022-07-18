import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1500/300`
  );

  faUser = faUser;
  faHome = faHome;
  faCalendarPlus = faCalendarPlus;
  faCaretRight = faCaretRight;
  faSearch = faSearch;

  
  openModal(content: any) {
    this.modalService.open(content, {});
  }

}
