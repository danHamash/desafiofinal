class heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi){
        this.nomeDoHeroi = nomeDoHeroi
        this.idadeDoHeroi = idadeDoHeroi
        this.tipoDoHeroi = tipoDoHeroi
    }
    atacar(){
        let movimento = ataque(this.tipoDoHeroi)

        console.log(`O ${this.tipoDoHeroi} atacou usando ${movimento}`)
}}

function ataque(tipoDoHeroi){
if (tipoDoHeroi === "Mago"){
    return "Magia"
}else if (tipoDoHeroi === "Monge"){
    return "Artes Marciais"
}else if (tipoDoHeroi === "Guerreiro"){
    return "Espada"
}
}
let heroiPersonalizado = new heroi("Hamash", "24", "Mago")
let outroHeroi = new heroi("Chaves", "30", "Guerreiro")
let maisUmHeroi = new heroi ("kakashi", "42", "Monge")

outroHeroi.atacar()
heroiPersonalizado.atacar()
maisUmHeroi.atacar()