const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome, email,
    }
    
    let convertData = JSON.stringify(data);
    
    localStorage.setItem('lead', convertData);
    
    let content = document.getElementById('content')

    let carregando = `<img src="assets/load.gif" alt="load" />`;

    let pronto = '<h2>Cadastrado</h2>'

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 3000)


})