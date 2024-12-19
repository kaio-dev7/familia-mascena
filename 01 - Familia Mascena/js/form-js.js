alert('Prezado usuário, caso não consiga realizar a consulta através do formulário a seguir, recomendamos fazer o download da lista de objetos sinistrados disponível no formato PDF e realizar uma consulta no arquivo baixado através da função CTRL + F e digitando a informação solicitada. Em caso de dúvida, entre em contato através do nosso canal de atendimento disponível na página inicial.');

function Mensagem(){
       
    this.Executar = function (){
 
    var Largura = window.innerWidth;
    var Altura = window.innerHeigth;
       
    var Objetos = document.getElementById("Componentes");
    var Caixa = document.getElementById("CaixaMensagem");
    
    Objetos.style.display = "block";
    Objetos.style.heigth = Altura+ "px";
    
    Caixa.style.left = (Largura/2) - (550 * .5)+"px";
    Caixa.style.top = "70px";
    Caixa.style.display = "block";
    
     document.getElementById("TituloMsg").innerHTML = "AVISO";
     document.getElementById("CorpoMsg").innerHTML = "DESEJA REALMENTE EXCLUIR?";
     document.getElementById("RodapeMsg").innerHTML = '<button class = "green" onclick= "Confirm.Sim()"> <b> <font color= "black" size = "5">Sim</font></b></button><button class = "red" onclick= "Confirm.Nao()"> <b><font color= "black"  size = "5">Não</font></b></button>';                                                                                                               
        
    }
    
    this.Nao = function (){   
    Fechar();   
    }
    
    
    this.Sim = function (){
    
     document.getElementById("RodapeMsg").innerHTML = '<button onclick= "Fechar()"> <b> <font color= "black" size = "5">Fechar</font></b></button>';
     
    var criteriopesquisa = document.getElementById("Campo1").value;
    
    if (criteriopesquisa.trim().length ==0){ 
     document.getElementById("CorpoMsg").innerHTML = "CANCELADO. ID NÃO PODE SER VAZIO!";
    
     }else{
          
        google.script.run.withSuccessHandler(Carregar).ExcluirDados(criteriopesquisa);
   
         function Carregar(retorno){  
    
           if (retorno != "Não encontrado!"){
 
               document.getElementById("CorpoMsg").innerHTML = "EXCLUÍDO COM SUCESSO!";
 
             Limpar();
 
            }else{ 
 
               document.getElementById("CorpoMsg").innerHTML = "REGISTRO NÃO ENCONTRADO!";
 
             }    
        }
    
      }
     }
    
    }   
    
 var Confirm = new Mensagem();
 
 function caixaMsgbox(m){
 
    var Largura = window.innerWidth;
    var Altura = window.innerHeigth;
    
    var Objetos = document.getElementById("Componentes");
    var Caixa = document.getElementById("CaixaMensagem");
    
    Objetos.style.display = "block";
    Objetos.style.heigth = Altura+ "px";
    
    Caixa.style.left = (Largura/2) - (550 * .5)+"px";
    Caixa.style.top = "70px";
    Caixa.style.display = "block";        
 
   document.getElementById("TituloMsg").innerHTML = "AVISO"; 
   document.getElementById("CorpoMsg").innerHTML = m;
   document.getElementById("RodapeMsg").innerHTML = '<button class = "orange" onclick= " Fechar()"> <b> <font color= "black" size = "5">Fechar</font></b></button>';
 
 }
 
 function Fechar(){
 document.getElementById("CaixaMensagem").style.display = "none";
 document.getElementById("Componentes").style.display = "none";
 }
 
 
 document.getElementById("btnpesquisar").addEventListener("click", Pesquisar);
  
   function Pesquisar(){  
   
   var criteriopesquisa = document.getElementById("Campo1").value;
   
   if (criteriopesquisa.trim().length == 0){  
    var m = "CRITÉRIO NÃO PODE SER VAZIO";
    caixaMsgbox(m);
    return false;
   };  
   
   google.script.run.withSuccessHandler(Carregar).PesquisarDados(criteriopesquisa);
   
   function Carregar(retorno){  
    
   if (retorno != "Não encontrado!"){
   
   document.getElementById("Campo1").value = retorno[0]
   M.updateTextFields();
   document.getElementById("Campo2").value = retorno[1]
   M.updateTextFields();
   document.getElementById("Campo3").value = retorno[2]
   M.updateTextFields();
   document.getElementById("Campo4").value = retorno[3]
   M.updateTextFields();
   document.getElementById("Campo5").value = retorno[4]
   M.updateTextFields();
   document.getElementById("Campo6").value = retorno[5]
   M.updateTextFields();
   document.getElementById("Campo7").value = retorno[6]
   M.updateTextFields();
   document.getElementById("Campo8").value = retorno[7]
   M.updateTextFields();
   document.getElementById("Campo9").value = retorno[8]
   M.updateTextFields();
   document.getElementById("Campo10").value = retorno[9]
   M.updateTextFields();
 
   }else{
   
    var m = "REGISTRO NÃO ENCONTRADO!";
    caixaMsgbox(m);
    Limpar();
    
   }
     
   }
   }
   
   document.getElementById("btnlimpar").addEventListener("click", Limpar);
  
   function Limpar(){  
   document.getElementById("Campo1").value = "";
   document.getElementById("Campo2").value = "";
   document.getElementById("Campo3").value = "";
   document.getElementById("Campo4").value = "";
   document.getElementById("Campo5").value = "";
   document.getElementById("Campo6").value = "";
   document.getElementById("Campo7").value = "";
   document.getElementById("Campo8").value = "";
   document.getElementById("Campo9").value = "";
   document.getElementById("Campo10").value = "";
   }
   
       
   document.getElementById("btnsalvar").addEventListener("click", Salvar);
    
    function Salvar(){
    
    var Campo1 = document.getElementById("Campo1").value;
    var Campo2 = document.getElementById("Campo2").value;
    var Campo3 = document.getElementById("Campo3").value;
    var Campo4 = document.getElementById("Campo4").value;
    var Campo5 = document.getElementById("Campo5").value;
    var Campo6 = document.getElementById("Campo6").value;
    var Campo7 = document.getElementById("Campo7").value;
    var Campo8 = document.getElementById("Campo8").value;  
    var Campo9 = document.getElementById("Campo9").value;
    var Campo10 = document.getElementById("Campo10").value;
 
    if (Campo1.trim().length != 0){
    var m = "CAMPO1 PRECISA SER VAZIO PORQUE É GERADO AUTOMATICAMENTE!";
    caixaMsgbox(m);
    return false;   
    }
    
    if (Campo2.trim().length == 0 || Campo3.trim().length == 0 || Campo4.trim().length == 0 || 
    Campo5.trim().length == 0 || Campo6.trim().length == 0 || Campo7.trim().length == 0 || Campo8.trim().length == 0 || Campo9.trim().length == 0 || Campo10.trim().length == 0){
    
    var m = "PRECISA PREENCHER TODOS OS CAMPOS, EXCETO CAMPO1";
    caixaMsgbox(m);
     return; 
        
    }else{
    
   var Dados ={
  Campo2: Campo2,
  Campo3: Campo3,
  Campo4: Campo4,
  Campo5: Campo5,
  Campo6: Campo6,
  Campo7: Campo7,
  Campo8: Campo8,
  Campo9: Campo9,
  Campo10: Campo10,
    };
    
    
  google.script.run.withSuccessHandler(Salvar).SalvarDados(Dados);
    
   function Salvar(retorno) {  
   var m = "SALVO COM SUCESSO!";
    caixaMsgbox(m);
   Limpar();  
      }
 }
 }
  
 
 
 document.getElementById("btneditar").addEventListener("click", Editar);
    
    function Editar(){
    
    var Campo1 = document.getElementById("Campo1").value;
    var Campo2 = document.getElementById("Campo2").value;
    var Campo3 = document.getElementById("Campo3").value;
    var Campo4 = document.getElementById("Campo4").value;
    var Campo5 = document.getElementById("Campo5").value;
    var Campo6 = document.getElementById("Campo6").value;
    var Campo7 = document.getElementById("Campo7").value;
    var Campo8 = document.getElementById("Campo8").value;     
    var Campo9 = document.getElementById("Campo9").value;
    var Campo10 = document.getElementById("Campo10").value;
 
 
    if (Campo1.trim().length == 0 || Campo2.trim().length == 0 || Campo3.trim().length == 0 || Campo4.trim().length == 0 || Campo5.trim().length == 0 || Campo6.trim().length == 0 || Campo7.trim().length == 0 || Campo8.trim().length == 0 || Campo9.trim().length == 0 || Campo10.trim().length == 0){
    
    var m = "PRECISA PREENCHER TODOS OS CAMPOS!";
    caixaMsgbox(m);
        
    }else{
    
   var Dados ={ 
  Campo1: Campo1,
  Campo2: Campo2,
  Campo3: Campo3,
  Campo4: Campo4,
  Campo5: Campo5,
  Campo6: Campo6,
  Campo7: Campo7,
  Campo8: Campo8, 
  Campo9: Campo9,
  Campo10: Campo10,  
    };
    
    
  google.script.run.withSuccessHandler(Editar).EditarDados(Dados);
    
   function Editar(retorno) {
 
   if(retorno != "ID não encontrado!" ){
    var m = "EDITADO COM SUCESSO!";
    caixaMsgbox(m);
   Limpar();
   }else{
    var m = "REGISTRO NÃO ENCONTRADO";
    caixaMsgbox(m);
   }

   function limparTexto() {
    document.getElementById('campo').value = '';
  }


 
 }
 }
 }   


 