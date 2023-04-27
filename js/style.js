const form = document.getElementById("endereco");
const formElements = form.elements;
const formCep = formElements.cep;
const buttonBusca = document.querySelector(".busca-cep");

buttonBusca.addEventListener("click", cepHandleChange);

function cepHandleChange() {
  buscaApi(formCep.value);
}

formCep.addEventListener("change", cepHandleChange);

function buscaApi(value) {
  fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then((r) => r.json())
    .then((endereco) => {
      hidradaDados(endereco);
    });
}

function hidradaDados(endereco) {
  formElements.logradouro.value = endereco.logradouro;
  formElements.logradouro.value = endereco.logradouro;
  formElements.complemento.value = endereco.complemento;
  formElements.bairro.value = endereco.bairro;
  formElements.localidade.value = endereco.localidade;
  formElements.uf.value = endereco.uf;
  formElements.ibge.value = endereco.ibge;
  formElements.gia.value = endereco.gia;
  formElements.ddd.value = endereco.ddd;
  formElements.siafi.value = endereco.siafi;
}

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("form-cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.ARS.buy).replace(".", ",");
    });
}

// setInterval(fetchBtc, 500);

fetchBtc();
