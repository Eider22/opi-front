import { Component, OnInit } from "@angular/core";
import { RequestData, optionsSelectModel } from "src/app/models/models";

@Component({
  selector: "app-request-page",
  templateUrl: "./request-page.component.html",
  styleUrls: ["./request-page.component.css"],
})
export class RequestPageComponent implements OnInit {
  selectedValue: number = 4;
  options: optionsSelectModel[] = [
    { value: 1, viewValue: "Solved" },
    { value: 2, viewValue: "Open" },
    { value: 3, viewValue: "Pending" },
    { value: 4, viewValue: "All status" },
  ];

  requestData: RequestData[] = [];
  requestDataCopy: RequestData[] = [];

  ngOnInit() {
    this.getData();
    console.log("En este instante el componente ha cargado");
  }

  selectionHandle(value: number) {
    this.selectedValue = value;
    console.log(this.selectedValue);
    this.updateData(value);
  }

  updateData(value: number) {
    if (!value) return;
    if (value == 1) {
      this.requestDataCopy = this.requestData.filter(
        (request) => request.status == "Solved"
      );
    }
    if (value == 2) {
      this.requestDataCopy = this.requestData.filter(
        (request) => request.status == "Open"
      );
    }
    if (value == 3) {
      this.requestDataCopy = this.requestData.filter(
        (request) => request.status == "Pending"
      );
    }
    if (value == 4) {
      this.requestDataCopy = this.requestData;
    }
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

    this.requestDataCopy = this.requestData;
  }
}
