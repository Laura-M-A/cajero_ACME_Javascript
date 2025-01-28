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


// let opc
// let usuarios = new Map()

// let menu = ("Bienvenido al CAJERO ACME \n \n" +
//     "(1)  \n" +
//     "(2)  \n" +
//     "(3)  \n" +
//     "(4)  \n" +
//     "(5)  \n" +
//     "(0)  \n"
// )

if (localStorage.getItem("usuarios")) {
    let usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));
    
    // Convertir el array de nuevo a un Map
    usuarios = new Map(usuariosGuardados);
}

const btnCrearCuenta = document.getElementById("btnCrearCuenta")
const btnConsignar = document.getElementById("btnConsignar")
const btnRetirar = document.getElementById("btnRetirar")
const btnPagarServicios = document.getElementById("btnPagarServicios")
const btnSalirDelPrograma = document.getElementById("btnSalirDelPrograma")

const contenedor = document.getElementById("contenedor")

btnCrearCuenta.addEventListener("click", ()=>{
    alert("Hola :3")
})


btnSalirDelPrograma.addEventListener("click", ()=>{
    alert("Hola")
    contenedor.innerText= "<h2>¡Gracias por usar nuestros servicios!</h2>"
})

// while (opc != "0") {
//     let log = false
//     alert(menu)
//     opc = prompt("Seleccione la tarea que desea realizar:")
//     switch (opc) {
//         case "1":
//             alert("(1) Crear una cuenta bancaria")
//             let numCuenta = prompt("Escriba su numero de cuenta")
//             let numDocumento = prompt("Escriba su numero de documento")
//             let nombre = prompt("Escriba su nombre completo")
//             let clave = prompt("Escriba su contraseña")

//             let infoCuenta = {
//                 numDocumento: numDocumento,
//                 nombre: nombre,
//                 clave , clave,
//                 saldo: 0,
//                 movimientos: []
//             }
//             usuarios.set( numCuenta, infoCuenta);

//             let usuariosArray = Array.from(usuarios);
//             localStorage.setItem("usuarios", JSON.stringify(usuariosArray));
//             break;  


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


