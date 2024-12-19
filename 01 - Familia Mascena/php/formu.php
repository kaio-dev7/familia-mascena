<?php
// Obtém os dados do formulário
$nome = $_POST['name'];
$email = $_POST['email'];
$mensagem = $_POST['message'];

// Define o email de destino
$para = 'seu_email@exemplo.com';

// Cria o corpo do email
$corpo = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";

// Envia o email
mail($para, 'Nova mensagem do formulário', $corpo);

// Redireciona para uma página de agradecimento
header('Location: obrigado.html');
?>