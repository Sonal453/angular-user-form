import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.firstName = this.route.snapshot.queryParamMap.get('fName') ?? '';
    this.lastName = this.route.snapshot.queryParamMap.get('lName') ?? '';
    this.email = this.route.snapshot.queryParamMap.get('email') ?? '';
    this.phoneNumber = this.route.snapshot.queryParamMap.get('phone') ?? '';
  }
}