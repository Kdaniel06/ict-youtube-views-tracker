import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private urlBase: string = '/api/';


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
    return this._http.post<any>(`${this.urlBase}teams-views/`, teams);
  }

  // TODO implements getTeamsPerEdition for future tournaments
  getFirstEditionTeams():Observable<Team[]> {
    console.warn(`${this.urlBase}first-edition-teams/`)
    return this._http.get<Team[]>(`${this.urlBase}first-edition-teams/`)
  }
}
