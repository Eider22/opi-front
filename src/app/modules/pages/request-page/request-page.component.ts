import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-request-page",
  templateUrl: "./request-page.component.html",
  styleUrls: ["./request-page.component.css"],
})
export class RequestPageComponent implements OnInit{
  test() {
    console.log("hello  button");
  }

  ngOnInit() {
    console.log("En este instante el componente ha cargado");
  }
}
