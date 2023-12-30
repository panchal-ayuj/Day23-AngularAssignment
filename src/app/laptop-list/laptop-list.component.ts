import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../LaptopService';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {
  laptops!: any[];
  subscriptions: Subscription[] = [];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
    console.log("NgOnInit");
    this.subscriptions.push(this.service.getLaptops().subscribe({
      next: (data) => {
        console.log(data);
        this.laptops = data;
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
