import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      first_name: this.fb.control("", [Validators.required]),
      last_name: this.fb.control("")
    });
  }

  onSubmit() {
    console.log(this.userRegistrationForm);
  }
}
