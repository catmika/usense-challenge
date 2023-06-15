import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';

  getColor(sectionIndex: number): string {
    if (this.password.length === 0) {
      return 'gray';
    }

    if (this.password.length < 8) {
      return 'red';
    }

    if (sectionIndex === 0) {
      return this.isStrong()
        ? 'green'
        : this.isMedium()
        ? 'yellow'
        : this.isWeak()
        ? 'red'
        : 'gray';
    }

    if (sectionIndex === 1) {
      return this.isStrong() ? 'green' : this.isMedium() ? 'yellow' : 'gray';
    }

    return this.isStrong() ? 'green' : 'gray';
  }

  //Conditions

  passwordHasLetters(): boolean {
    return /[a-zA-Z]/.test(this.password);
  }

  passwordHasDigits(): boolean {
    return /[0-9]/.test(this.password);
  }

  passwordHasSymbols(): boolean {
    return /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);
  }

  isWeak(): boolean {
    return (
      this.passwordHasLetters() ||
      this.passwordHasDigits() ||
      this.passwordHasSymbols()
    );
  }

  isMedium(): boolean {
    return (
      (this.passwordHasLetters() && this.passwordHasDigits()) ||
      (this.passwordHasLetters() && this.passwordHasSymbols()) ||
      (this.passwordHasDigits() && this.passwordHasSymbols())
    );
  }

  isStrong(): boolean {
    return (
      this.passwordHasLetters() &&
      this.passwordHasDigits() &&
      this.passwordHasSymbols()
    );
  }
}
