
// Selecione os elementos com IDs únicos
const content = document.getElementById('content');
//const divFixa = document.getElementById('div-fixa'); // Adicione o seletor para o outro botão
const divFixalupa = document.getElementById('div-fixa-lupa'); // Adicione o seletor para o outro botão
const span = document.getElementById('span');

// Adicione a classe 'aparecer' ao span
span.classList.add('aparecer');

// Crie intervalos separados para cada elemento
setInterval(function () {
    content.classList.toggle('shrink');
    //divFixa.classList.toggle('shrink');
    divFixalupa.classList.toggle('shrink'); // Adicione a alteração de classe para o outro botão
}, 5000);

setTimeout(function() {
    setInterval(function () {
        span.classList.toggle('aparecer');
    }, 5000);
}, 200);

//const anuncio = document.createElement('div');
//anuncio.id = 'meu-anuncio';
//anuncio.innerHTML = '<h2>Anúncio Dinâmico</h2><p>Este anúncio foi criado com JavaScript.</p>';
//document.body.appendChild(anuncio);













