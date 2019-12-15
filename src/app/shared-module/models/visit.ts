import {Doctor} from './doctor.model';
import {Patient} from './patient.model';


export interface Visit {
  patient: Patient;
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
  diagnosis?: string;
  prescription?: string;
  recommendations?: string;
}
