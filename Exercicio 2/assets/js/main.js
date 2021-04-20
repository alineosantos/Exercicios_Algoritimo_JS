function calcular(){

    var valor = document.getElementById('txtValor').value;
    var consumo = document.getElementById('txtConsumo').value;

    var total = ([consumo/1000]*valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    document.getElementById('outTotal').textContent = 'Valor a Pagar ' +total;

}

var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcular); 