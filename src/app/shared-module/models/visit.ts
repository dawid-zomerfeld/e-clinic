import {Doctor} from './doctor.model';


export interface Visit {
  id?: string;
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minutes?: number;
  duration?: number;
  status?: string;
  doctor?: Doctor;
  price?: number;
}
