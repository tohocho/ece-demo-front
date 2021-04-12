import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent implements OnInit {

  listaPacientes: Patient[] = [];

  constructor(private dataS: DataService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(): void {
    this.dataS.getPacientes().subscribe(data => {
      this.listaPacientes = data;
    })
  }

  eliminarPaciente(paciente: Patient): void{
    Swal.fire({
      title: 'Seguro que decea eliminar al paciente?',
      showDenyButton: true,
      confirmButtonText: `No, Cancelar`,
      denyButtonText: `Si, Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminación cancelada!', '', 'info')
      } else if (result.isDenied) {
        this.dataS.deletePatient(paciente.id).subscribe(data => {
          this.listaPacientes = this.listaPacientes.filter(p => p != paciente);
        })
        Swal.fire('Paciente eliminado correctamente', '', 'success')
      }
    })
  }
}
