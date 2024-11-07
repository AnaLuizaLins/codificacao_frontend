
function Cadastrar(){

const nomeProprio = document.getElementById("nome-proprio");
const apelidio = document.getElementById("apelido");
const nascimento = document.querySelector("#nascimento");
const genero = document.getElementById("genero")
const email = document.getElementById("email")
const senha = document.getElementById("senha")

const nomeProprioValue = nomeProprio.value;
const apelidoValue = apelidio.value;
const nascimentoValue = nascimento.value;
const generoValue = genero.value;
const emaailValue = email.value;
const senhaValue = senha.value;

if(nomeProprioValue === ""){
    nomeProprio.classList.add("erro")
    return
}else{
    nomeProprio.classList.remove("erro")
}

if(apelidoValue === ""){
  apelidio.classList.add("erro")
    return
}else{
   apelidio.classList.remove("erro")
}

if(nascimentoValue === ""){
    nascimento.classList.add("erro")
      return
  }else{
     nascimento.classList.remove("erro")
  }

  if(generoValue === ""){
    genero.classList.add("erro")
      return
  }else{
     genero.classList.remove("erro")
  }

  if(emaailValue === ""){
    email.classList.add("erro")
      return
  }else{
     email.classList.remove("erro")
  }

  if(senhaValue === ""){
    senha.classList.add("erro")
      return
  }else{
     senha.classList.remove("erro")
  }
}