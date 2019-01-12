import { Component, OnInit } from "@angular/core";
import { AirportService } from "../../services/airport.service";
import { Airport } from "src/app/model/airport";

@Component({
  selector: "app-airports",
  templateUrl: "./airports.component.html",
  styleUrls: ["./airports.component.scss"]
})
export class AirportsComponent implements OnInit {
  airports: Airport[];

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.airportService.getAllAirports().subscribe(airports => {
      console.log(airports);
      this.airports = airports;
    });
  }
}
