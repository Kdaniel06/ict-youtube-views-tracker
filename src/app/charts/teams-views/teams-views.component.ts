import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-teams-views',
  standalone: true,
  imports: [],
  templateUrl: './teams-views.component.html',
  styleUrl: './teams-views.component.scss'
})
export class TeamsViewsComponent implements OnInit {
  
  // ? Services
  private _apiService = inject(ApiService);

  ngOnInit(): void {

    this.apiCallGetSingleTeamViews({"name": "Imperial Crew"});
    

  }

  private apiCallGetSingleTeamViews(teams: any): void{
    this._apiService.getSingleTeamView(teams).subscribe((data: any) => {
      console.info(data);
    })
  }

}
