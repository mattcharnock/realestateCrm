import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyRegisterService } from '../services/company-register.service';
import { UserServiceService } from '../services/user-service.service';
import { ClearSpacesPipe } from '../pipes/clear-spaces.pipe';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  companyName: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  country: string;
  numberOfEmployees: string;
  password: string;
  password2: string;



  constructor(
    private http: CompanyRegisterService,
    // tslint:disable-next-line: variable-name
    private _http: UserServiceService) { }

  createUser(user) {

    // console.log(user)

    this._http.registerUser(user).subscribe(data => {
      console.log(data);
    });

  }

  ngOnInit() {



  }

  onRegisterSubmit() {


    const company = {

    companyName: this.companyName,
    primaryContact: {firstName: this.firstName, lastName: this.lastName, email: this.email},
    country: this.country,
    numberOfEmployees: this.numberOfEmployees,


    };

    const user = {

      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.username.toLocaleLowerCase() + '@' + this.companyName.toLowerCase().replace(/ /g, '') + '.com',
      companyId: '',
      password: this.password,
      password2: this.password2,
    };

    const payload = {
      company,
      user
    };

    // console.log(user);
    // console.log(company)

    this.http.registerCompany(payload).subscribe(data => {
      console.log(data);
      // user.companyId = data._id;
      // console.log(user.companyId)
      // this.createUser(user);

    });

    }



  }






