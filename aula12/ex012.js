// Programa que mostra a hora atual e dá uma mensagem de acordo com o horário com if/else

var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();

console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`);
if (hora < 12) {
    console.log("Tenha um excelente dia!");
} else if (hora <= 18) {
    console.log("Uma excelente tarde!")
} else {
    console.log("Tenha uma excelente noite!");
}