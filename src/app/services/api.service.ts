import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = '/';


  // ? Example Team {"name": "Imperial Crew"}
  getSingleTeamView(team:any):Observable<any> {
    return this._http.post<any>(`${this.urlBase}single-team-views/`, team);
  }

  /* ? Example Teams:
  [
      {"name": "Imperial crew"},
      {"name": "San Francisco Academia"},
      {"name": "Invu FC"},
      {"name": "Cedros Crew"},
      {"name": "Aston Rios PC"},
      {"name": "Barcola"}
    ]
  */
  getTeamsViews(teams:any):Observable<any> {
    return this._http.post<any>(`${this.urlBase}/teams-views/`, teams);
  }
}
