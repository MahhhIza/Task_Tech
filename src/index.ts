class Consumidor {
constructor(
private nome: string,
private idade: number,
private email: string
) {
this.validarDados();
}

private validarDados(): void {
    if (this.nome.trim() === "") {
        throw new Error("O nome não pode estar vazio.");
    }

    if (!Number.isFinite(this.idade) || this.idade <= 0) {
        throw new Error("A idade deve ser um número positivo.");
    }

    if (
        this.email.trim() === "" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)
    ) {
        throw new Error("O e-mail informado é inválido.");
    }
}

public formatarExibicao(): string {
    return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
}

public obterNome(): string {
    return this.nome;
}

public obterIdade(): number {
    return this.idade;
}

public obterEmail(): string {
    return this.email;
}

}

const listaConsumidores: Consumidor[] = [];

function calcularMediaIdade(consumidores: Consumidor[]): number {
if (consumidores.length === 0) return 0;

const somaIdades = consumidores.reduce(
    (acc, consumidor) => acc + consumidor.obterIdade(),
    0
);

return somaIdades / consumidores.length;

}

function obterExtremosIdade(
consumidores: Consumidor[]
): {
maisVelho: Consumidor | undefined;
maisNovo: Consumidor | undefined;
} {
let maisVelho = consumidores[0];
let maisNovo = consumidores[0];

if (maisVelho !== undefined && maisNovo !== undefined) {
    for (const consumidor of consumidores) {
        if (consumidor.obterIdade() > maisVelho.obterIdade()) {
            maisVelho = consumidor;
        }

        if (consumidor.obterIdade() < maisNovo.obterIdade()) {
            maisNovo = consumidor;
        }
    }
}

return { maisVelho, maisNovo };

}

listaConsumidores.push(
new Consumidor("Ana Silva", 30, "ana@email.com"),
new Consumidor("Carlos Souza", 22, "carlos@email.com"),
new Consumidor("Mariana Lima", 45, "mariana@email.com"),
new Consumidor("Roberto Alves", 19, "roberto@email.com"),
new Consumidor("Fernanda Dias", 33, "fernanda@email.com")
);

console.log("LISTA DE CONSUMIDORES");

listaConsumidores.forEach(consumidor => {
console.log(consumidor.formatarExibicao());
});

console.log("\nANÁLISE ESTATÍSTICA");

console.log(
`Média das Idades: ${calcularMediaIdade(listaConsumidores).toFixed(1)} anos`
);

const { maisVelho, maisNovo } = obterExtremosIdade(listaConsumidores);

if (maisVelho !== undefined && maisNovo !== undefined) {
console.log(
`Mais Velho(a): ${maisVelho.obterNome()} (${maisVelho.obterIdade()} anos)`
);

console.log(
    `Mais Novo(a): ${maisNovo.obterNome()} (${maisNovo.obterIdade()} anos)`
);

} else {
console.log("Não foi possível calcular os extremos de idade.");
}
