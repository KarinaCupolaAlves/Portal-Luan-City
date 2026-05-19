function alterarNavbar() {
    let navbar_links = document.getElementById('navbar_ul')

    let links_logado = `
        <p class='nome-usuario'>
            Olá, ${sessionStorage.NOME_USUARIO}
        </p>
        <div class="agora-line">
          <li>
            |
          </li>
        </div>
        <li class="agora">
          <a href="index.html">Home</a>
        </li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="dashboard.html">Dashboard</a>
        </li>
        <li>
          <a href="comunidade.html">Comunidade</a>
        </li>
        <button onclick='logout()' class='btn-sair'>
            Sair
        </button>
    `
    let links_nao_logado = `
        <li class="agora">
          <a href="index.html">Home</a>
        </li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="dashboard.html">Dashboard</a>
        </li>
        <li>
          <a href="comunidade.html">Comunidade</a>
        </li>
        <div class="agora-line">
          <li>
            |
          </li>
        </div>
        <li>
          <a href="login.html">Login</a>
        </li>
        <li>
          <a href="cadastro.html">Cadastro</a>
        </li>
    `

    if (sessionStorage.ID_USUARIO) {
        navbar_links.innerHTML = links_logado
    } else {
        navbar_links.innerHTML = links_nao_logado
    }
}

function logout() {
    sessionStorage.clear();
    window.location = "index.html"
}