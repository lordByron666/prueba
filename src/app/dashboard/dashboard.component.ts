import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  closeResult: string = '';
  constructor(private modalService: NgbModal, private toastr: ToastrService) {}

  ngOnInit(): void {}

  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1500/300`
  );

  faArrowRight = faArrowRight;
  faStar = faStar;
  faUserPlus = faUserPlus;
  faUserCheck = faUserCheck;
  faShoppingCart = faShoppingCart;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faInstagram = faInstagram;

  openModal(content: any) {
    this.modalService.open(content, {});
  }

  isAddFavorite: boolean = true;
  addFavorite() {
    this.toastr.success('Evento añadido a favoritos');
    this.isAddFavorite = false;
  }
  isPartipated: boolean = true;
  participate() {
    this.toastr.success('Evento añadido a participar');
    this.isPartipated = false;
  }
}
