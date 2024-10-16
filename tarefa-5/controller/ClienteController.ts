import Cliente from '../entities/Cliente';
import InMemoryRepository from '../repositories/InMemoryRepository';
import IClienteRepository from '../repositories/interface/iClienteRepository';

export default class ClienteController {
  constructor(private repository: IClienteRepository) {}

  adicionaCliente(cliente: Cliente) {
    this.repository.adicionaCliente(cliente);
  }
  listaClientes() {
    return this.repository.listaClientes();
  }
}
