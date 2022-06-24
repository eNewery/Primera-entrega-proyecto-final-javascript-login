function createToArr(arr){
class Productos {
    constructor(user, password){
        this.usuario = user;
        this.contraseña = password;
    }
}


let preguntaUser = document.getElementById("user").value
let preguntaPass = document.getElementById("password").value
Producto = new Productos(preguntaUser, preguntaPass);
console.log(arr)
pushToArr(usuarios)
}
const usuarios = []

function pushToArr(arr){
    arr.push(Producto)
    console.log(usuarios)
}


function animationButton(){
    let register = document.getElementById("register-app")
    let boton = document.getElementById("animation-button")
    let login = document.getElementById("login-app")
    boton.classList.add("animacion-displaynone")
    login.classList.add("activa-log")
    register.classList.add("activa-reg")
}