import { HttpHeaders } from '@angular/common/http';


export abstract class ExtractData {
    public static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}
