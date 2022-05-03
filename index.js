const form = document.getElementById('form')
const username= document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('passwordconfirm')

// evento de enviar (quando for enviada as informações)
 form.addEventListener('submit', (e) => { 
    e.preventDefault() // retira o comportamento padrão (geralmente feito em formularios)
     checkInputs() // para criar uma funçao para declarar as validaçoes dos campos
 })

  //todas as validações de todos os campos estarão aqui dentro 
 function checkInputs(){
     const usernameValue = username.value.trim()
     const emailValue = email.value.trim()
     const passwordValue = password.value.trim()
     const passwordConfirmValue = passwordConfirm.value.trim()
    // o trim() remove os possiveis espaços em branco que usuario pode deixar nos campos, retornando apenas o valor solicitado (as informações do usuario)

    if(usernameValue === ''){
         //mostrar o erro
         //adicionar classe de error
         errorValidation(username,  'Preencha esse campo')
     }else{
         //adicionar classe de sucesso
         sucessValidation(username)
    }

    if(emailValue === ''){
         errorValidation(email,'Preencha este campo')
     }else{
         sucessValidation(email)
    }

    if (passwordValue === ''){
         errorValidation(password, "Preencha este campo")
     }else if(passwordValue <= 8){
         errorValidation(password, 'A senha deve ter no minimo 8 caracteres')    
    }else{
        sucessValidation(password)
    }

    if(passwordConfirmValue === ''){
         errorValidation(passwordConfirm, 'Preencha este campo')
     }else if(passwordConfirmValue !== passwordValue){
        errorValidation(passwordConfirm, 'as senhas são discordantes')
    }else{
        sucessValidation(passwordConfirm)
    }
 }
 
function errorValidation(input, message){
    const formControl = input.parentElement;  //parentElement retorna uma referencia direta do pai 

    const p = formControl.querySelector ('p')  //reformulando o valor de p para o valor da message declarado no error validation 
    p.innerText = message

    formControl.className = 'form-control error' //reatribuindo a classe da div form-control fazendo com que ela receba o texto/valor indicado acima 
}

function sucessValidation(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success'
}