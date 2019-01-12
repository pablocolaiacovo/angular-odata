import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Airport } from "../model/airport";
import { AirportOdataResponse } from "../model/odataResponse";

@Injectable({
  providedIn: "root"
})
export class AirportService {
  constructor(private http: HttpClient) {}
  private airportsServiceUrl =
    "https://services.odata.org/TripPinRESTierService/(S(f21bgi35p232zisehxucoju3))/Airports";

  getAllAirports(): Observable<Airport[]> {
    return this.http.get<AirportOdataResponse>(this.airportsServiceUrl).pipe(
      tap(_ => console.log("fetched all airports")),
      map(response => {
        return response.value;
      }),
      catchError(this.handleError("getAllAirports", []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
