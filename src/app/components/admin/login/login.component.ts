import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel = new UserModel();

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userModel)
    if (this.userModel.email == "admin" && this.userModel.password == "admin") {
      this.router.navigateByUrl('admin')
    } else {
      this.service.login(this.userModel).subscribe((data) => {
        console.log(data);
        if (data != "Invalid") {
          localStorage.setItem('user', data)
          this.router.navigate(['user/home'],{replaceUrl:true})
        }
        else {
          alert("Invalid Credentials")
        }
      })
    }
    
  }

}
