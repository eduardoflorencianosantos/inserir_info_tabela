function inserirDados() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const chamada = document.getElementById('chamada').value;

    let dado = `
        <tr>
            <td>${nome}</td>
            <td>${idade}</td>
            <td>${chamada}</td>
        </tr>
    `;

    document.getElementById('info').innerHTML = dado;
}