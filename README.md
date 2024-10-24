<h1 align="center"> 📊 YouTube Views Tracker FrontEnd </h1>

![vscode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)
![angular](https://img.shields.io/badge/Angular-0F0F11?style=flat&logo=angular&logoColor=white)
![Badge en Desarollo](https://img.shields.io/badge/STATUS-Working%20on-green)

Welcome to the YouTube Views Tracker! This Angular application allows you to analyze view counts for various teams on your YouTube channel. With a clean interface and efficient backend integration, you can easily track and visualize the performance of your content.

## 🚀 Getting Started
### Prerequisites
* Node.js (v14 or higher)
* Angular CLI (v16 or higher)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Kdaniel06/ict-youtube-views-tracker.git
    cd ict-youtube-views-tracker
    ```

2. Install dependencies:
    ```bash
    npm install
    ```
    
4. Set up the backend:
Ensure your backend server is running on http://localhost:8000/.

5. Run the application with proxy:
Use the following command to start the Angular application with a proxy configuration:
    ```bash
    ng serve --proxy-config proxy.config.json
    ```

## 📈 Features
* Single Team View: Fetches and displays view data for a specific team.
* Multiple Teams View: Allows analysis of multiple teams' views in one go.
* Responsive Charts: Visual representation of view data for better insights.

## 🛠️ Code Overview
### ApiService
Handles all HTTP requests to the backend.

```typescript
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase: string = '/';

  getSingleTeamView(team: any): Observable<any> {
    return this._http.post<any>(`${this.urlBase}single-team-views/`, team);
  }

  getTeamsViews(teams: any): Observable<any> {
    return this._http.post<any>(`${this.urlBase}/teams-views/`, teams);
  }
}
```

### TeamsViewsComponent
Displays the team views using the ApiService.

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-teams-views',
  standalone: true,
  templateUrl: './teams-views.component.html',
  styleUrl: './teams-views.component.scss'
})
export class TeamsViewsComponent implements OnInit {
  
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiCallGetSingleTeamViews({"name": "Imperial Crew"});
  }

  private apiCallGetSingleTeamViews(teams: any): void {
    this._apiService.getSingleTeamView(teams).subscribe((data: any) => {
      console.info(data);
    });
  }
}
```

### Proxy Configuration
The proxy.config.json file allows you to redirect API calls to your backend during development:

```json
{
    "/*": {
        "target": "http://localhost:8000/",
        "secure": false,
        "logLevel": "debug"
    }
}
```

## 🎨 UI Design
The application features a user-friendly interface designed with responsiveness in mind. Customize styles in teams-views.component.scss to fit your branding.

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📫 Contact
For questions or feedback, feel free to reach out via GitHub issues or [contact me](cascantekevin374@gmail.com). Happy coding! 🎉