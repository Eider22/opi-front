import { Component} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent {

  selectedValue = "pizza-1";
  fGroup: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder
  ){

  }

  constructForm(){
    this.fGroup = this.fb.group({
      
    });
  }
 

  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];

  onSelect() {
    console.log("Selected value: ", this.selectedValue);
  }  
}
