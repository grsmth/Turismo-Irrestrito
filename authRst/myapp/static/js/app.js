const registerButton = document.querySelector("#register-button");
const closeRegisterButton = document.querySelector("#close-button-cadastro");
const modal = document.querySelector("#modal-cadastro");

const registerButtonToggle = document.getElementById('register-button-toggle');
const loginButtonToggle = document.getElementById('login-button-toggle');

const loginButton = document.querySelector("#login-button");
const closeLoginButton = document.querySelector("#close-button-login");
const modalLogin = document.querySelector("#modal-login");

registerButton.addEventListener("click", () => {
  console.log('2')
  modal.showModal();
});

registerButtonToggle.addEventListener("click", () => {
  modal.showModal();
});

closeRegisterButton.addEventListener("click", () => {
  modal.close();
});

loginButton.addEventListener("click", () => {
  modalLogin.showModal();
});
loginButtonToggle.addEventListener("click", () => {
  modalLogin.showModal();
});

closeLoginButton.addEventListener("click", () => {
  modalLogin.close();
});



function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("Você esta inserindo email inválido!");
  return false;
}

function cadastrar() {
  var nomeCompleto = document.getElementById("nomeCompleto").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (!ValidateEmail(email)) {
    return false;
  } else {
    var userData = {
      name: nomeCompleto,
      email: email,
      password: senha,
    };

    // Envia uma solicitação POST para a API do Django
    fetch("/api/myapp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
  }
}

// document.getElementById("buttonCadastrar").addEventListener("click", cadastrar);
