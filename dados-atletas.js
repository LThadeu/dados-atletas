class Atleta {
    constructor(nome, idade, peso, altura, notas){
      this.nome = nome
      this.idade = idade
      this.peso = peso
      this.altura = altura
      this.notas = notas
    }
    calcularCategoria(){
        if (this.idade >= 9 && this.idade <=11){
        console.log ("Infantil")
         return "Infantil"
        } else if (this.idade >=12 && this.idade <=13){
          console.log ("Juvenil")
          return "Juvenil"
        } else if (this.idade === 14 || this.idade === 15){
          console.log ("Intermediário")
          return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30) {
          console.log ("Adulto")
          return "Adulto"
        } else { 
          console.log ("Sem categoria")
        return "Sem categoria"}
    };
    calcularImc(){
      console.log (this.peso / (this.altura * this.altura) )
          return this.peso / (this.altura * this.altura)
    };
      calculaMediaValida(){
          let listaFinal = this.notas.sort(function(a, b){
          return a - b
        }).slice(1, -1) 
         console.log(listaFinal.reduce((a, b) => a + b) / (listaFinal.length)) 
             };
  
    obtemNomeAtleta(){
      return `${this.nome}`
    };
    obtemIdadeAtleta(){
      return `${this.idade}`
    };
    obtemPesoAtleta(){
      return `${this.peso}`
    };
    obtemNotasAtleta(){
      return this.notas
    };
    obtemAlturaAtleta(){
      console.log(this.altura)
      return this.altura
    };
    obtemCategoria(){
      return calcularCategoria()
    };
    obtemImc(){
      return calcularImc()
    }
    obtemMediaValida(){
      return calculaMediaValida()
    };
  
   consoleInfoAtleta(){
     return console.log (this.nome)
   }
  };
  
  const cesar = new Atleta("Cesar Abascal",
      30, 80, 1.70,
      [10, 9.34, 8.42, 10, 7.88]);
  
  cesar.consoleInfoAtleta()
  cesar.obtemAlturaAtleta()
  cesar.calcularImc()
  cesar.calculaMediaValida()
  cesar.calcularCategoria()