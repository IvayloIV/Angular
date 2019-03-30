import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    getPhones(): Observable<string[]> {
        return new Observable((observable) => {
            return observable.next(['+971', '+359', '+972', '+198', '+701']);
        });
    }

    getTypes(): Observable<string[]> {
        return new Observable((observable) => {
            return observable.next(['Designer', 'Manager', 'Accounting']);
        });
    }
}
