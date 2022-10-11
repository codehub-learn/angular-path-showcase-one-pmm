import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../shared/domain/user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User("", "", "", "", "");

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser() {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id <= 0) {
        this.router.navigateByUrl("400");
      } else {
        this.userService.getById(id).subscribe((user) => {
          this.user = user;
        });
      }
    });
  }
}
