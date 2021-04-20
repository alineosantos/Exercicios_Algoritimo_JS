function revender(){

   var veiculo = document.getElementById('txtVeiculo').value;
   var valorTotal = document.getElementById('txtPreco').value;

   var entrada = (valorTotal * 0.5).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
   var parcela = ([valorTotal * 0.5]/12).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

   document.getElementById('outVeiculo').textContent = veiculo;
   document.getElementById('outPreco').textContent = `Entrada de ${entrada} + 12x de ${parcela}`;

}

var btnRevender = document.getElementById('btnRevender');
btnRevender.addEventListener('click', revender);

