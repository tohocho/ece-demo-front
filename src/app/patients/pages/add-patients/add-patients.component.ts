import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-patients',
  templateUrl: './add-patients.component.html',
  styleUrls: ['./add-patients.component.css']
})
export class AddPatientsComponent implements OnInit {

  paciente: Patient = new Patient();
  titulo: string = 'Crear paciente';

  constructor(private dataS: DataService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPaciente();
  }

  cargarPaciente(): void{
    this.activateRoute.params.subscribe(parametros => {
      let id = parametros['id'];
      if (id) {
        this.dataS.getPatient(id).subscribe(data => {
          this.paciente = data;
        })
      }
    })
  }

  create(): void {
    this.dataS.createPatient(this.paciente).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Guardado completo',
        text: 'Has guardado un nuevo paciente',
      })
      this.router.navigateByUrl('patients/find-all');
    })
  }

  update(): void {
    this.dataS.updatePatient(this.paciente).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Actualización completada',
        text: 'Has actualizado los datos del paciente correctamente',
      })
      this.router.navigateByUrl('patients/find-all');
    })
  }

}
