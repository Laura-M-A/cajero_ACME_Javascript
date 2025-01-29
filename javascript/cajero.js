function login(usuarios){
    let valCuenta = prompt("Escriba su numero de cuenta")
    let valClave = prompt("Escriba su contraseña")

    for (let [key, value] of usuarios){
        if(key === valCuenta) {
            console.log("Cuenta correcta")
            if (value.clave === valClave) {
                console.log("Clave correcta")
                return true  
            }else{alert("Contraseña incorrecta")}
        }else{alert("Cuenta incorrecta")}
    }
}



// if (localStorage.getItem("usuarios")) {
//     let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
    
//     // Convertir el array de nuevo a un Map
//     usuarios = new Map(usuariosGuardados);
// }



let usuarios
let numCuenta
let usuariosJSON = localStorage.getItem("usuarios");

usuarios = usuariosJSON ? JSON.parse(usuariosJSON) : {};
numCuenta = Object.keys(usuarios).length;


const opcCrearCuenta = document.getElementById("opcCrearCuenta") //YA :D
const opcConsignar = document.getElementById("opcConsignar")
const opcRetirar = document.getElementById("opcRetirar")
const opcPagarServicios = document.getElementById("opcPagarServicios")
const opcSalirDelPrograma = document.getElementById("opcSalirDelPrograma")


const contenedor = document.getElementById("contenedor")
const operacion = document.getElementById("contenedorOperacion")


opcCrearCuenta.addEventListener("click", ()=> {
        operacion.innerHTML = `
                <div id="login">
                    <h3>Crear cuenta nueva</h3>
                    <div id="crearCuenta" >
                        <p><input  type="text" id="numDocumento" placeholder="Numero de documento" required></p>    
                        <p><input  type="text" id="nombre" placeholder="Nombre Completo" required></p>
                        <p><input  type="text" id="clave" placeholder="Escriba su contraseña" required></p>    
                        <p><input  type="button" id="btnCrearCuenta" value="Crear Cuenta"></p>
                    </div>
                </div>`

        const btnCrearCuenta = document.getElementById("btnCrearCuenta")

        btnCrearCuenta.addEventListener("click", ()=>{
            let infoCuenta = {
                numDocumento: document.getElementById("numDocumento").value,
                nombre: document.getElementById("nombre").value,
                clave: document.getElementById("clave").value,
                saldo: 0,
                historial: []
            }   

            numCuenta ++
            usuarios[numCuenta] = infoCuenta
            
    
            let usuariosJSON = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", usuariosJSON);
            console.log(usuarios)
            alert("Informacion guardada")
        })
    })


opcConsignar.addEventListener("click", ()=>{
    let valorConsignar = document.getElementById("numeroCuentaParaConsignar")
    
    })
    



//         case "1":



//         case "2":
//             let numero = prompt ("(2) Consignar dinero a una cuenta \n Desea realizar la transaccion mediante: \n (1) Cuenta    (2) Documento")
//             alert("Datos de todos los usuarios:\n" + JSON.stringify(Array.from(usuarios.entries())), null, 1);            
//             switch (numero) {
//                 case "1":
//                     let numCuenta = prompt("Escriba su numero de documento")
//                     if (usuarios.has(numCuenta)) {
//                         let nuevoSaldo = prompt("Cuenta encontrada, ¿cuanto dinero desea consignar?: ")
//                         usuarios.get(numCuenta).saldo += parseInt(nuevoSaldo)
//                         let usuariosArray = Array.from(usuarios);
//                         localStorage.setItem("usuarios", JSON.stringify(usuariosArray));
//                     }
//                     else{
//                         alert("Numero de cuenta inexistente")}
//                     break;
//                 case "2":
//                     let numDocumento = prompt("Escriba su numero de documento")
//                     usuarios.forEach((cuenta, numCuenta) => {
//                         if(cuenta.numDocumento === numDocumento) {
//                             let nuevoSaldo = prompt ("Cuenta encontrada, ¿cuanto dinero desea consignar?: ")
//                             cuenta.saldo += parseInt(nuevoSaldo)
//                             let usuariosArray = Array.from(usuarios);
//                             localStorage.setItem("usuarios", JSON.stringify(usuariosArray));
//                         }
//                         else{
//                             alert("Numero de documento inexistente")}
//                     })
                        
//                     break;
                    
//             }           
                
//             break;

//         case "3":
//             alert("(3) Retirar dinero \n Para retirar tiene que autentificarse primero")
//             log = login(usuarios)
//             if (log) {
//                 let dineroARetirar = prompt("¡Ha ingresado correctamente¡ \n ¿Cuanto desea retirar!")
//                 usuarios.forEach((cuenta, numCuenta)=>{
//                     if (cuenta.saldo >= dineroARetirar){
//                         cuenta.saldo -= parseInt(dineroARetirar)
//                         alert("Dinero retirado con exito, su saldo actual es: " + cuenta.saldo)
//                         let usuariosArray = Array.from(usuarios);
//                         localStorage.setItem("usuarios", JSON.stringify(usuariosArray));

//                     }else{
//                         alert("No tienes suficiente dinero")
//                     }
//                 })
//             }
//             break;
//         case "4":
//             let pagado = false
//             alert("(4) Pagar recibos \n Para retirar tiene que autentificarse primero")
//             log = login(usuarios)
            
//             if (log){
//                 let tipoRecibo = prompt("¡Ha ingresado correctamente¡ \n ¿Que recibo desea pagar? \n (1) Energia    (2) Agua    (3) Luz")
//                 let dineroARetirar = prompt("Cuanto dinero cuesta el recibo")

//                 usuarios.forEach((cuenta, numCuenta)=>{
//                     if (cuenta.saldo >= dineroARetirar){
//                         cuenta.saldo -= parseInt(dineroARetirar)
//                         alert("Dinero retirado con exito, su saldo actual es: " + cuenta.saldo)
//                         pagado = true
//                         let usuariosArray = Array.from(usuarios);
//                         localStorage.setItem("usuarios", JSON.stringify(usuariosArray)); 
//                     }else{
//                         alert("No tienes suficiente dinero")
//                     }
//                 })
//             }
//             if (pagado){
//                 switch (tipoRecibo){
//                     case "1":
//                         alert("Ha pagado el recibo de la Energia")
//                     case "2":
//                         alert("Ha pagado el recibo de la Agua")
//                     case "3":
//                         alert("Ha pagado el recibo de la Luz")

//                 }
//             }
//             break
//         case "0":
//             alert("Cerrando programa")
//     }
// }


btnSalirDelPrograma.addEventListener("click", ()=>{
    alert("Cerrando programa...")
    contenedor.innerHTML= "<h2 id='finPrograma' >¡Gracias por usar nuestros servicios!</h2>"
})