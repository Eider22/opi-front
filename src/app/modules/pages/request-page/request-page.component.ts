import { Component, OnInit } from "@angular/core";
import { RequestData, optionsSelectModel } from "src/app/models/models";

@Component({
  selector: "app-request-page",
  templateUrl: "./request-page.component.html",
  styleUrls: ["./request-page.component.css"],
})
export class RequestPageComponent implements OnInit {
  selectedValue = "4";
  options: optionsSelectModel[] = [
    { value: 1, viewValue: "Solved" },
    { value: 2, viewValue: "Open" },
    { value: 3, viewValue: "Pending" },
    { value: 4, viewValue: "All status" },
  ];

  requestData: RequestData[] = [];

  ngOnInit() {
    this.getData();
    console.log("En este instante el componente ha cargado");
  }

  selectionHandle(value: string) {
    this.selectedValue = value;
    console.log(this.selectedValue);
  }

  test() {
    console.log("hello  button");
  }

  getData() {
    this.requestData.push(
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
      }
    );
  }
}
