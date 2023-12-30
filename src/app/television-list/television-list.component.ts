import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../TelevisionService';

@Component({
  selector: 'app-television-list',
  templateUrl: './television-list.component.html',
  styleUrls: ['./television-list.component.scss']
})
export class TelevisionListComponent implements OnInit {
  televisions!: any[];
  subscriptions: Subscription[] = [];
  constructor(private service: HttpService) {}
  ngOnInit(): void {
    console.log("NgOnInit");
    this.subscriptions.push(this.service.getTelevisions().subscribe({
      next: (data) => {
        console.log(data);
        this.televisions = data;
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
