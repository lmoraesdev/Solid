{
  const MES_COMERCIAL = 20; //dias trabalhados no mês

  interface ContratoRemunerado {
    titulo: string;
    remuneracao(): number;
  }

  class ContratoPj implements ContratoRemunerado {
    private GANHO_POR_HORA_PJ = 36;
    private CARGA_HORARIA_DIARIA_PJ = 8;

    remuneracao(): number {
      return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
    }
    titulo: string = 'PJ';
  }

  class ContratoClt implements ContratoRemunerado {
    private GANHO_POR_HORA_CLT = 24;
    private CARGA_HORARIA_DIARIA_CLT = 8;

    remuneracao(): number {
      return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
    }
    titulo: string = 'CLT';
  }

  class Estagio implements ContratoRemunerado {
    private GANHO_POR_HORA_ESTAGIARIO = 14;
    private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;

    remuneracao(): number {
      return (
        this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO
      );
    }
    titulo: string = 'Estagiário';
  }

  class FolhaDePagamento {
    static calcularSalarioMensal(funcionario: ContratoRemunerado): number {
      return funcionario.remuneracao() * MES_COMERCIAL;
    }
  }
  const funcionarioClt = new ContratoClt();
  const funcionarioEstagiario = new Estagio();
  const funcionarioPj = new ContratoPj();

  console.log(
    `Sou ${
      funcionarioClt.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioClt
    )}`
  );
  console.log(
    `Sou ${
      funcionarioEstagiario.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioEstagiario
    )}`
  );
  console.log(
    `Sou ${
      funcionarioPj.titulo
    } e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(
      funcionarioPj
    )}`
  );
}
