import { Component, Input, OnChanges } from "@angular/core";
import { RequestData } from "src/app/models/models";

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.css"],
})
export class RequestListComponent implements OnChanges  {
  @Input() requests: string = "";
  @Input() requestData: RequestData[] = [];
  displayedColumns: string[] = [
    "userName",
    "subject",
    "customerSatisfaction",
    "priority",
    "status",
  ];
  dataSource = this.requestData;
  
  ngOnChanges() {
    this.dataSource = this.requestData;
  }
}
