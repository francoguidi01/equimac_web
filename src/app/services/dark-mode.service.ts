import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject = new BehaviorSubject<boolean>(this.getDarkModeFromLocalStorage());
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() { }

  toggleDarkMode(isDarkMode: boolean): void {
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode)); // Guarda el estado del modo oscuro en el almacenamiento local
  }

  getDarkMode(): boolean {
    return this.darkModeSubject.value; // Obtén el valor actual del modo oscuro desde el BehaviorSubject
  }

  private getDarkModeFromLocalStorage(): boolean {
    const darkMode = localStorage.getItem('darkMode');
    return darkMode ? JSON.parse(darkMode) : false; // Obtén el estado del modo oscuro del almacenamiento local, si no existe devuelve false
  }
}
