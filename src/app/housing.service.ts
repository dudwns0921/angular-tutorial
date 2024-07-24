import { Injectable } from '@angular/core';
import { HousingLocation } from './housingLocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly serverUrl = 'http://localhost:3000/locations';
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.serverUrl);
    return (await data.json()) ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.serverUrl}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
