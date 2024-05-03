import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5'; // Import MD5 library

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  passwordForm: FormGroup;
  email: string;
  newGeneratedPassword: string;
  passwordSent: boolean = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.email = '';
    this.newGeneratedPassword = '';
  }

  ngOnInit(): void {
  }
  

  onSubmit() {
    if (this.passwordForm.valid) {
      this.email = this.passwordForm.value.email;
      this.generateAndSendNewPassword();
    }
  }

  generateAndSendNewPassword() {
    // 1. Generate a random password
    this.newGeneratedPassword = generateRandomPassword(); // Replace with your password generation logic
    console.log('Generated password:', this.newGeneratedPassword);
    // 2. Encrypt the generated password using MD5
    const encryptedPassword = Md5.hashStr(this.newGeneratedPassword);
    console.log('encrypted password:', this.newGeneratedPassword);
    // 3. Send the new password to the user's email
    this.http.post('/api/send-password', { email: this.email, newPassword: encryptedPassword })
      .subscribe(() => {
        this.passwordSent = true;
      }, error => {
        console.error(error); 
        console.log('ERROR');// Handle error if password cannot be sent
      });
  }
}

// Function to generate a random password (replace with your implementation)
function generateRandomPassword(length: number = 12, complexity: number = 3): string {
  // Define character sets based on complexity
  const charSets: {
    [key: number]: string; // Key is a number (complexity level), value is a string (character set)
  } = {
    1: String.fromCharCode(...Array(26).keys()).toLowerCase(), // Lowercase letters
  };

  charSets[2] = charSets[1] + String.fromCharCode(...Array(26).keys()).toUpperCase(); // Lowercase + uppercase letters
  charSets[3] = charSets[2] + '0123456789!@#$%^&*()'; // All sets + symbols

  // Clamp complexity to valid range
  complexity = Math.min(complexity, 3);

  // Choose character set based on complexity
  const passwordChars = charSets[complexity];

  // Generate random password using array methods
  return Array(length)
    .fill(null)
    .map(() => passwordChars.charAt(Math.floor(Math.random() * passwordChars.length)))
    .join('');
}

