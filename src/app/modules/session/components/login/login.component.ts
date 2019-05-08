import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  private email: string = "eve.holt@reqres.in";
  private password: string = "cityslicka";

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async login(){
    const response = await this.authService.login(this.email, this.password);

    this.responseAction(response);

  }

  async register(){
    const response = await this.authService.register(this.email, this.password);

    this.responseAction(response);
  }

  responseAction(response){
    if(response.token){
      localStorage.setItem("token", response.token);
      window.location.reload();
    }else{
      alert("Resiva tus datos");
    }
  }


}
