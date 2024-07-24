import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService, Person } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  successMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registerForm = this.formBuilder.group({
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      sex: ['', Validators.required],
      DateNaissance: ['', Validators.required],
      Categorie: ['', Validators.required],
      service: ['', Validators.required],
      observation: [''],
      Telephone: ['', [Validators.required, Validators.pattern('^[0-9]{08}$')]], // Validation pour le numéro de téléphone
      Email: ['', [Validators.required, Validators.email]] // Validation pour l'adresse e-mail
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      const person: Person = this.registerForm.value;
      this.registrationService.addPerson(person).subscribe(
        response => {
          this.successMessage = 'Person registered successfully!';
          this.registerForm.reset();
        },
        error => {
          this.successMessage = 'An error occurred while registering the person.';
          console.error('Error registering person', error);
        }
      );
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registerForm.controls).forEach(field => {
        const control = this.registerForm.get(field);
        if (control) { // Vérifier que le contrôle n'est pas null
          control.markAsTouched({ onlySelf: true });
        }
      });
    }
  }
}
