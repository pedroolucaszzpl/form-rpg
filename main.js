function analisar() {
    var personagem = document.getElementById("name").value;
    var classe = document.getElementById("classe").value;
    var server = document.getElementById("server").value;

    document.getElementById("nameex").innerHTML = personagem;
    document.getElementById("classeex").innerHTML = classe;
    document.getElementById("serverex").innerHTML = server;
    event.preventDefault();
}