import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../shared-module/models/doctor.model';
import {Recepcionist} from '../../shared-module/models/recepcionist.model';



const DOCTOR_DATA: Doctor[] = [
  {id: 1, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 2, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 3, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 4, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 5, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 6, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 7, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 8, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 9, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
  {id: 10, firstName: 'Jan', lastName: 'Kowalski', specialization: 'Ginekolog', email: 'Hydrogen@wp.pl'},
];

const RECEPCIONIST_DATA: Recepcionist[] = [
  {id: 1, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 2, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 3, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 4, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 5, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 6, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 7, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 8, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 9, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
  {id: 10, firstName: 'Ewa', lastName: 'Kowalska', email: 'Astra@wp.pl'},
];

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.scss']
})
export class AdminEmployeeComponent implements OnInit {
  displayedColumnsDoctor: string[] = ['id', 'firstName', 'lastName', 'specialization', 'email'];
  dataSourceDoctor = DOCTOR_DATA;
  displayedColumnsRecepcionist: string[] = ['id', 'firstName', 'lastName', 'email'];
  dataSourceRecepcionist = RECEPCIONIST_DATA;
  constructor() { }

  ngOnInit() {
  }

}
