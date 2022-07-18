import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  images = [944, 1011, 984].map(
    (n) => `https://picsum.photos/id/${n}/1500/300`
  );
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
