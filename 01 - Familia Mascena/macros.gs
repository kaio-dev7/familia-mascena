var url = "https://docs.google.com/spreadsheets/d/1hN6-Mn477sqO0p1OYm_WAZCLBt7S96k0DI4bdNEMcy0/edit?resourcekey#gid=1600074140"

var nomeguia = "Dados";
var linhainicial = 2;
var colunainicial = 1;
var linhacabecalho = 1;

// coluna array
var colunaID = 1;



function PesquisarDados(criteriopesquisa){

var planilha = SpreadsheetApp.openByUrl(url);

var guiadados = planilha.getSheetByName(nomeguia); 

var dados = guiadados.getRange(linhainicial, colunainicial, guiadados.getLastRow()-linhacabecalho,8).getValues(); 

for(var linha = 0; linha<dados.length; linha++){
          
     if(dados[linha][colunaID].toString().toLowerCase() == criteriopesquisa.toString().toLowerCase() || dados[linha][1].toString().toLowerCase() == criteriopesquisa.toString().toLowerCase()){           
       
        var Carregar={};
        
        var data = Utilities.formatDate(dados[linha][6], Session.getScriptTimeZone(), "dd/MM/yyyy"); 

        var valor = dados[linha][7]. toLocaleString("pt-BR"); 
                
        Carregar.Campo1= dados[linha][colunaID]
        Carregar.Campo2 = dados[linha][4];
        Carregar.Campo3 = dados[linha][5];      
        Carregar.Campo4 = data;
        Carregar.Campo5 = valor; 
           
        

        dados.length = 0

         return ([Carregar.Campo1,Carregar.Campo2, Carregar.Campo3, Carregar.Campo4, Carregar.Campo5, Carregar.Campo6])     
         
         
     }
     


}

dados.length = 0
return "Não encontrado!";


}