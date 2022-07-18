import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../models/person';
import { PersonService } from 'src/app/services/person.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  person: Person = {
    names: '',
    surnames: '',
    email: '',
    phone: '',
    nick: '',
    typeIdentityId: '',
    typePersonId: '',
    generId: '',
    createdFromUser: 'Administrador',
    username: '',
    password: '',
    rolName: 'admin',
  };

  confirm_password: any;

  constructor(
    private router: Router,
    private personService: PersonService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  createPerson() {
    console.log(this.person);
    if (
      this.person.names &&
      this.person.surnames &&
      this.person.email &&
      this.person.phone &&
      this.person.nick &&
      this.person.typeIdentityId &&
      this.person.typePersonId &&
      this.person.generId &&
      this.person.username &&
      this.person.password &&
      this.confirm_password
    ) {
      // switch (true) {
      //   case this.person.names.length < 3:
      //     this.toastr.warning('El campo Nombres debe tener al menos 3 letras');
      //     break;
      // }
      this.personService.createPerson(this.person).subscribe(
        (res) => {
          this.toastr.success('Usuario registrado');
          this.router.navigate(['/home']);
        },
        (err) => {
          console.log(err);
          this.toastr.warning('No se ha podido registrar la información');
        }
      );
    } else {
      this.toastr.warning('Por favor, completar la información');
    }
  }
}
