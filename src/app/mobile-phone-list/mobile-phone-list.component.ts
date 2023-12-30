import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../MobileService';

@Component({
  selector: 'app-mobile-phone-list',
  templateUrl: './mobile-phone-list.component.html',
  styleUrls: ['./mobile-phone-list.component.scss']
})
export class MobilePhoneListComponent implements OnInit {
  mobiles!: any[];
  subscriptions: Subscription[] = [];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
    console.log("NgOnInit");
    this.subscriptions.push(this.service.getMobiles().subscribe({
      next: (data) => {
        console.log(data);
        this.mobiles = data;
        console.log("1 retrieved");
      },
      error: (errors) => {
        console.log("1 errors");
      },
      complete: () => {
        console.log("1 completed");
      }
    }));
  }
}
