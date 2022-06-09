const tarefas = [
    'Faça uma caminhada', 
    'Comece a Dançar',
    'Desenhe algo que Gosta',
    'Estude algo que Gosta',
    'Leia um capítulo de um Livro',
    'Medite 15 min',
    'Escute Música',
    'Toque Piano',
    'Toque Ukulele',
    'Faça uma Ikebana',
    'Escreva uma poesia',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

function choose() {

    document.getElementById('btn').style.padding = '100px 120px';
    document.getElementById('div_1').style.opacity = "0";
    document.getElementById('bdy').style.backgroundColor = "#1d4da7";
        
    setTimeout( function() {
    
        var slct = Math.round(Math.random()*(11 - 1)) + 1;
        document.getElementById('div_1').innerHTML = '<h1>' + tarefas[slct] + '</h1>';
        document.getElementById('bdy').style.backgroundColor = "#a8b9d0";
        document.getElementById('div_1').style.opacity = "1";
    
    }, 1800);
};
