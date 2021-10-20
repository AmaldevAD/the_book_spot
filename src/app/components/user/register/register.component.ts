import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userModel: any;

  constructor(private service: AuthService) {
    this.userModel = new UserModel();
  }

  ngOnInit(): void {
  }
  register() {
    this.service.register(this.userModel).subscribe((data) => {
      if (data == "User Registered") {
        alert("User Registered Succesfully");

      }
      else
        alert("Error")
    })
  }

}
