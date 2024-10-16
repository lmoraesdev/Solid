import Cliente from '../entities/Cliente';
import IClienteRepository from './interface/iClienteRepository';

export default class InMemoryRepository implements IClienteRepository {
  private db: Cliente[];

  constructor() {
    this.db = [];
  }

  adicionaCliente(cliente: Cliente): void {
    this.db.push(cliente);
  }
  listaClientes(): Cliente[] {
    return this.db;
  }
}
