 // variáveis de botões/layout
 var n1 = window.document.getElementById('n1');
 var n2 = window.document.getElementById('n2');
 var res = window.document.getElementById('resu');
 var Somar = window.document.getElementById('soma');
 var Subtrair = window.document.getElementById('subt');
 var Multiplicar = window.document.getElementById('mult');
 var Dividir = window.document.getElementById('divi');
 var Elevar = window.document.getElementById('elev');
 var Raiz = window.document.getElementById('raiz');
 var Porcento = window.document.getElementById('porc');
 var jj = 0
 // funções entrar/sair (mouse) 
 function entrou_soma() {
     Somar.style.background='darkslategray';
 }
 function saiu_soma() {
     Somar.style.background='black';
 }
 function entrou_subtrair() {
     Subtrair.style.background='darkslategray';
 }
 function saiu_subtrair() {
     Subtrair.style.background='black';
 }
 function entrou_multiplicar() {
     Multiplicar.style.background='darkslategray';
 }
 function saiu_multiplicar() {
     Multiplicar.style.background='black';
 }
 function entrou_dividir() {
     Dividir.style.background='darkslategray';
 }
 function saiu_dividir() {
     Dividir.style.background='black';
 }
 function entrou_elevar() {
     Elevar.style.background='darkslategray';
 }
 function saiu_elevar() {
     Elevar.style.background='black';
 }
 function entrou_raiz() {
     Raiz.style.background='darkslategray'
 }
 function saiu_raiz() {
     Raiz.style.background='black'
 }
 function entrou_porcen() {
    Porcento.style.background='darkslategray'
}
function saiu_porcen() {
    Porcento.style.background='black'
}
 // funções de click (calcular)
 function somar() {
     var num1 = Number(n1.value);
     var num2 = Number(n2.value);
     var soma_res = num1 + num2;
     res.innerHTML=(`${num1} + ${num2} = ${soma_res}`);
     return jj = 1;
 }
 function subtrair() {
     var num1 = Number(n1.value);
     var num2 = Number(n2.value);
     var subt_res = num1 - num2;
     res.innerHTML=(`${num1} - ${num2} = ${subt_res}`);
     return jj = 2;
 }
 function multiplicar() {
     var num1 = Number(n1.value);
     var num2 = Number(n2.value);
     var mult_res = num1 * num2;
     res.innerHTML=(`${num1} * ${num2} = ${mult_res}`);
     return jj = 3;
 }
 function dividir() {
     var num1 = Number(n1.value);
     var num2 = Number(n2.value);
     var divi_res = num1 / num2;
     res.innerHTML=(`${num1} : ${num2} = ${divi_res}`);
     return jj = 4;
 }
 function elevar() {
     var num1 = Number(n1.value);
     var num2 = Number(n2.value);
     var elev_res = num1 ** num2;
     res.innerHTML=(`${num1} ^ ${num2} = ${elev_res}`);
     return jj = 5;
 }
 function porcen() {
    var num1 = Number(n1.value);
    var num2 = Number(n2.value);
    var num3 = num2/100;
    var porc_res = num1*num3;
    res.innerHTML=(`${num1}% de ${num2} é ${porc_res}`);
    /*return jj = 6;*/
}
 function raiz1() {
     switch (jj) {
         case 0:
             window.alert('Realize alguma das operações anteriores para obter um resultado em "Raiz²".')
             break
         case 1:
         var raiz_res =(Math.sqrt(Number(n1.value) + Number(n2.value)));
         res.innerHTML=(`Raiz² de (${Number(n1.value)} + ${Number(n2.value)}) é ${raiz_res}`);
         break
         case 2:
         var raiz_res =(Math.sqrt(Number(n1.value)-Number(n2.value)));
         res.innerHTML=(`Raiz² de (${Number(n1.value)} - ${Number(n2.value)}) é ${raiz_res}`);
         break
         case 3:
         var raiz_res =(Math.sqrt(Number(n1.value)*Number(n2.value)));
         res.innerHTML=(`Raiz² de (${Number(n1.value)} * ${Number(n2.value)}) é ${raiz_res}`);
         break
         case 4:
         var raiz_res =(Math.sqrt(Number(n1.value)/Number(n2.value)));
         res.innerHTML=(`Raiz² de (${Number(n1.value)} : ${Number(n2.value)}) é ${raiz_res}`);
         break
         case 5:
         var raiz_res =(Math.sqrt(Number(n1.value)**Number(n2.value)));
         res.innerHTML=(`Raiz² de (${Number(n1.value)} ^ ${Number(n2.value)}) é ${raiz_res}`);
         break
         /*case 6:
         var raiz_res =(Math.sqrt(porc_res));
         res.innerHTML =(`Raiz² de ${porc_res} é ${raiz_res}`);
         break*/
         default:
         var raiz_res = "ERROR"
         res.innerHTML=(`${raiz_res}`);
     }
 }