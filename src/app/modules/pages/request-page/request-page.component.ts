import { Component, OnInit } from "@angular/core";
import { RequestData, optionsSelectModel } from "src/app/models/models";
import { ApiServiceService } from "src/app/services/api-service.service";

@Component({
  selector: "app-request-page",
  templateUrl: "./request-page.component.html",
  styleUrls: ["./request-page.component.css"],
})
export class RequestPageComponent implements OnInit {
  constructor(private apiService: ApiServiceService) {}

  requestData: RequestData[] = [];
  requestDataCopy: RequestData[] = [];
  
  optionsStatusSelect: optionsSelectModel[] = [
    { value: 1, viewValue: "Solved" },
    { value: 2, viewValue: "Open" },
    { value: 3, viewValue: "Pending" },
    { value: 4, viewValue: "All status" },
  ];
  

  ngOnInit() {
    this.getData();
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

  getData() {
    this.apiService.getApidata().subscribe({
      next: (data: RequestData[]) => {
        this.requestData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.requestDataCopy = this.requestData;
  }

  test() {
    console.log("hello  button");
  }
}
