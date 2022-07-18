import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
  };

  constructor(
    private usersService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.user.username && this.user.password) {
      this.usersService.login(this.user).subscribe(
        (res) => {
          this.toastr.success('Usuario ingresado');
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          this.toastr.warning('Usuario y/o contraseña incorrectas');
        }
      );
    } else {
      this.toastr.warning('Por favor, completar los datos');
    }
  }
}
