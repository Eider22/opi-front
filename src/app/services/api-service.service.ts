import { Injectable } from "@angular/core";
import { RequestData } from "../models/models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getApidata(): Observable<RequestData[]> {
    const data: RequestData[] = [
      {
        id: 1,
        userName: "Andres juan",
        subject: "I can´t login to my account",
        customerSatisfaction: "100%",
        priority: "High",
        status: "Solved",
      },
      {
        id: 2,
        userName: "Ezequiel Saltino",
        subject: "I need help!!, can't login...",
        customerSatisfaction: "80%",
        priority: "Medium",
        status: "Open",
      },
      {
        id: 3,
        userName: "Emiliano Cosenza",
        subject: "I can´t to login...",
        customerSatisfaction: "100%",
        priority: "Low",
        status: "Pending",
      },
    ];

    return new Observable<RequestData[]>((observer) => {
      observer.next(data);
      observer.complete();
    });
  }
}
