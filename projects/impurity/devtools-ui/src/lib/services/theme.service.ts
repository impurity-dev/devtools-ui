import { Theme } from './../models/theme.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public changeTheme(_theme: Theme) {
        throw new Error('Not Implemented!');
    }
}
