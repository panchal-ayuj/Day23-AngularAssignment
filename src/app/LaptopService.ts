import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
providedIn:  'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }
        getLaptops(): Observable<any[]> {
            //return this.http.get(this.url);
            return of([
                {model: "Model 1", date: new Date('2023-01-01'), price: 100000},
                {model: "Model 2", date: new Date('2023-02-05'), price: 150000}
            ]);
        }
}





