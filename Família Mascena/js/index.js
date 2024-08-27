
// Selecione os elementos com IDs únicos
const content = document.getElementById('content');
const divFixa = document.getElementById('div-fixa'); // Adicione o seletor para o outro botão
const span = document.getElementById('span');

// Adicione a classe 'aparecer' ao span
span.classList.add('aparecer');

// Crie intervalos separados para cada elemento
setInterval(function () {
    content.classList.toggle('shrink');
    divFixa.classList.toggle('shrink'); // Adicione a alteração de classe para o outro botão
}, 5000);

setTimeout(function() {
    setInterval(function () {
        span.classList.toggle('aparecer');
    }, 5000);
}, 200);













