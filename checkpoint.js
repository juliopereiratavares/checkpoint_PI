function Pessoa(nome, nota, falta) {
    this.nome = nome;
    this.nota = nota;
    this.falta = falta;

    this.calcularMedia = function () {
        let somanota = 0;
        for (let i = 0; i < this.nota.length; i++) {
            somanota += nota[i];
        }
        return somanota / this.nota.length;
    }

    this.faltas = function () {
        this.falta++;

    }

}

let pessoas = [];

const pessoa1 = new Pessoa("Julio", [2, 10, 8], 1);
const pessoa2 = new Pessoa("Amanda", [7, 8, 7], 3);
const pessoa3 = new Pessoa("Humberto", [10, 6, 6], 6);
const pessoa4 = new Pessoa("Patricia", [9, 7, 7], 2);
const pessoa5 = new Pessoa("Alex", [10, 5, 8], 3);
const pessoa6 = new Pessoa("Jennifer", [7, 7, 8], 0);


pessoas.push(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6)


const curso = {
    nomeCurso: "Digital House",
    notaAprovacao: 7,
    numeroFaltas: 4,
    listaAlunos: pessoas,
    arrBoleanos: lista=[],

    adicionarEstudante: function (nome, nota, falta) {

        this.listaAlunos.push(new Pessoa(nome, nota, falta))

    },

    resultado: function (pessoa) {
    
            if (pessoa.calcularMedia() >= curso.notaAprovacao && pessoa.falta < curso.numeroFaltas) {
                console.log(`${pessoa.nome} foi Aprovado`)

            } else if (pessoa.calcularMedia() >= 1.1*curso.notaAprovacao && pessoa.falta == curso.numeroFaltas) {
                console.log(`${pessoa.nome} foi Aprovado`)

            } else {
                console.log(`${pessoa.nome}  foi Reprovado`)
            }

        },


    resultadoFinal: function(){
        for (let i = 0; i < this.listaAlunos.length; i++) {

            this.listaAlunos[i]

         if (this.listaAlunos[i].calcularMedia() >= curso.notaAprovacao && this.listaAlunos[i].falta < curso.numeroFaltas) {
             this.arrBoleanos.push(true)
 
         } else if (this.listaAlunos[i].calcularMedia() >= 1.1*curso.notaAprovacao && this.listaAlunos[i].falta == curso.numeroFaltas) {
             this.arrBoleanos.push(true)
 
         } else {
             this.arrBoleanos.push(false)
         }
        }
 
     }
 

}


curso.resultadoFinal()
console.log(curso.arrBoleanos);