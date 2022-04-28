import { Component, Output } from "@angular/core";
import { EventEmitter } from "stream";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter();

  valor!: number;
  destino!: number;

  transferir(){
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino:', this.destino);

    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
  }
}
