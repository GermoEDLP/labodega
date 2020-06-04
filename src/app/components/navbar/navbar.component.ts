import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <!-- <div class="modal-header" style="background-image: url('assets/images/bg_4.jpg')">
      <h4 class="modal-title">Bienvenidx!</h4>
      
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div> -->
    <div
      class="modal-body"
      style="background-image: url('assets/images/bg_4.jpg')"
    >
      <h4 class="modal-title">Bienvenidx!</h4>
      <p>
        Inicia sesión o registrate para poder acceder a nuestros beneficios!
      </p>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Ingresa aqui tu email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Ingresa aqui tu contraseña"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Recordarme</label
          >
        </div>
        <button class="btn btn-primary" (click)="activeModal.close('Close click')">Iniciar sesión</button>
        <button
          type="button"
          class="btn btn-primary btn-outline-primary"
          (click)="activeModal.close('Close click')"
          style="float: right"
        >
          Cerrar
        </button>
      </form>

    </div>
    <!-- <div class="modal-footer" style="background-image: url('assets/images/bg_4.jpg')">
      
    </div> -->
  `,
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
