import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person {
  Nom: string;
  Prenom: string;
  sex: string;
  DateNaissance: string;
  Categorie: string;
  service: string;
  observation: string;
  Telephone: string; // Nouveau champ pour le numéro de téléphone
  Email: string; // Nouveau champ pour l'adresse e-mail
}


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:5032/api/RegistrationForms'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }
}
