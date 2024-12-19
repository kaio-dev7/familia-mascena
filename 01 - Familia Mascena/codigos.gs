function doGet() {
  
  var form = HtmlService.createTemplateFromFile("Principal");  
  return form.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  

}

function Chamar(Arquivo){

  return HtmlService.createHtmlOutputFromFile(Arquivo).getContent();

}