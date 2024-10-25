document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDeFalt();

    // Obter valores da entrada informados pelo usuário
    const valor = (document.getElementById('amont').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;