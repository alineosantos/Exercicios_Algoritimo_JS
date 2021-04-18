let txtTitulo = 0;
let txtHoras = 0;
let outTitulo = "";
let outHoras = "";

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
    }
}

function converter() {
    //Capturar os campos
    txtTitulo = document.getElementById('txtTitulo');
    txtHoras = document.getElementById('txtHoras');
    outTitulo = document.getElementById('outTitulo');
    outHoras = document.getElementById('outHoras');

    //Capturar os valores
    let titulo = txtTitulo.value;
    let minutosTotais = Number(txtHoras.value); // Horas me minutos

    if (!(txtHoras.value > 0)) {
        console.log("retorno vazio")
        return
    }

    //Converter
    let duracaoHoras = Math.trunc(minutosTotais / 60);
    let duracaoMinutos = minutosTotais % 60;

    //Exibir o resultado
    outTitulo.textContent = 'Titulo: ' + titulo;
    outHoras.textContent = `${duracaoHoras} hora(s) e ${duracaoMinutos} minuto(s)`;

}

