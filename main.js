// Criação de uma function mais generica para facilitar o play dos elementos de audio.
function tocaSom(elementoAudio)  {
    // Criamos uma constante para armazenar o seletor da tag audio que será reproduzido
    const elemento = document.querySelector(elementoAudio);

    // Criamos uma contição que se o elemento e a localName do elemento forem do tipo audio, então o play()será executado, caso contrário irá aparecer uma mensagem informando o erro. 
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou Seletor não encontrado');
    }
};

// Criação de um array com todos os elementos buttons com a class .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// Geração de um loop possibilitando selecionar todos os elementos do array independente do seu tamanho.
for (contador = 0; contador < listaDeTeclas.length; contador++)  {
    // Para evitar repetição de contigo colocamos na variável tecla o array com o contador que será os elementos que serão alterados
    let tecla = listaDeTeclas[contador];
    // Com a seguinte variável vamos pegar no elemento listaDeTeclas na classList a class com o nome da tecla: Exemplo tecla_pom
    let instrumento = tecla.classList[1];
    // Aqui criamos um template string que ira juntar o elemento instrumento que vem com o nome da tecla ao id #som_ gerando assim o som da tecla de forma dinâmica.
    let idAudio = `#som_${instrumento}`;
    // Aqui será gerado o evento de click, com uma função anonima, assim executando a função tocaSom() somente quando tivermos o evento de click. 
    tecla.onclick = function () {
        // A função anonima é criada pois caso contrário a função toca som seria bloqueada, pois não podemos executar som sem algum tipo de interação do client/user.
        tocaSom(idAudio);
    }

    // Iremos pegar no objeto javascript o nome da tecla que encontramos em code, e iremos criar uma condição para que seja adicionado a classe ativa somente quando enter e space forem clicados.
    tecla.onkeydown = function(event)   {
        if(event.code === 'Enter' || event.code === 'Space')    {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}