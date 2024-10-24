import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Team } from '../../models/team.model';
import { Team_views } from '../../models/team_views.model';
import { UtilsService } from '../../services/utils.service';
import { Chart, ChartType, registerables } from 'chart.js';

Chart.register(...registerables); // ? Register the chart types

@Component({
  selector: 'app-teams-views',
  standalone: true,
  imports: [],
  templateUrl: './teams-views.component.html',
  styleUrl: './teams-views.component.scss'
})
export class TeamsViewsComponent implements OnInit {

  // ? The initialized teams list
  team_list : Team[] = []
  
  // ? Services
  private _apiService = inject(ApiService);
  private _utilsService = inject(UtilsService);

  // ? Chart
  public teams_views_chart!: Chart;

  ngOnInit(): void {

    this.apiCallGetFirstEditionTeams();

  }

  private apiCallGetFirstEditionTeams(): void {
    this._apiService.getFirstEditionTeams().subscribe((data: Team[]) => {
      this.team_list = data;
      this.getTeamsViews();
    })
  }

  private getTeamsViews(): void {
    this._apiService.getTeamsViews(this.team_list).subscribe((data: Team_views[]) => {

      // ? Build the title
      let all_total_views: number = data.reduce((total, team) => total + team.total_views, 0);
      let chartTitle = `Vistas por equipos (Vistas totales de equipos: ${all_total_views})`
      
      // ? Build the data 
      let teams: any = [];
      let teams_views: any = [];
      data.forEach(element => {
        teams.push(element.team);
        teams_views.push(element.total_views);
      });
      
      // ? Chart color and context
      let colors = this._utilsService.genColors(data.length);
      const ctx = this.getContext("teams_views_chart");

      // ? Update the existing chart
      if (this.teams_views_chart) {
        this.teams_views_chart.destroy();
      } 

      // ? Build the chart
      this.teams_views_chart = new Chart(ctx, {
        type: 'pie' as ChartType,
        data: {
          labels: teams,
          datasets: [{
            data: teams_views,
            backgroundColor: colors
          }]
        },
        options: {
          plugins: {
            title: {
                display: true,
                text: chartTitle
            }
          }
        }
      });
      
    })
  }





  // * Utility for the charts
  private getContext(elementId: string): any {
    const canvas:any = document.getElementById(elementId)
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) { return ctx }
    }
  }

}
