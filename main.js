class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  lutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
}

const strange = new Vingador(
  "Doutor Estranho",
  "1.80",
  "85kg",
  [
    "Mago Supremo",
    "Teletransporte",
    "Vôo",
    "Longevidade",
    "Escudos de proteção",
  ],
  true,
  false,
  false,
  true
);

document.getElementById("lutar").onclick = function () {
  strange.lutar();
};
