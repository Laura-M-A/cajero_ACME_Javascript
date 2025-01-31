
function login() {
    usuarios = localStorage.getItem("usuarios");
    usuarios = usuarios ? JSON.parse(usuarios) : {};   
    return new Promise((resolve, reject) => {
        const htmlContent = `
        <div id="login">
            <h3>Login</h3>
            <div>
                <p>Para continuar necesita autentificarse</p>
                <p><input type="text" id="numCuenta" placeholder="Numero de cuenta" required></p>
                <p><input type="text" id="clave" placeholder="Contraseña" required></p>
                <p><input type="button" id="enviar" value="Enviar"></p>
            </div>
        </div>
        `;
        operacion.innerHTML = htmlContent;

        const btnEnviar = document.getElementById("enviar");

        btnEnviar.addEventListener("click", () => {
            let numCuenta = parseInt(document.getElementById("numCuenta").value);
            let clave = document.getElementById("clave").value;

            for (let key in usuarios) {
                console.log(key)
                console.log(numCuenta)
                if (key == numCuenta) {
                    if (usuarios[key].clave == clave) {
                        alert("¡Ha ingresado correctamente!");
                        resolve({ exito: true, numCuenta: numCuenta });
                        return;
                    }
                } 
            }
            resolve(false);
        });
    });
}



//////////////////////////////////////////////////////////////////////////////////

let numCuenta

let usuarios = localStorage.getItem("usuarios");
usuarios = usuarios ? JSON.parse(usuarios) : {};    

numCuenta = Object.keys(usuarios).length;


const opcCrearCuenta = document.getElementById("opcCrearCuenta") //YA :D
const opcConsignar = document.getElementById("opcConsignar") // 1/2
const opcRetirar = document.getElementById("opcRetirar") //
const opcPagarServicios = document.getElementById("opcPagarServicios") //
const opcSalirDelPrograma = document.getElementById("opcSalirDelPrograma") // Ya


const contenedor = document.getElementById("contenedor")
const operacion = document.getElementById("operacion")

//////////////////////////////////////////////////////////////////////////////////

opcCrearCuenta.addEventListener("click", ()=> {
    usuarios = localStorage.getItem("usuarios");
    usuarios = usuarios ? JSON.parse(usuarios) : {};    

    const htmlContent = `
    <div id="login">
        <h3>Crear cuenta nueva</h3>
        <div id="crearCuenta">
            <p><input type="text" id="numDocumento" placeholder="Numero de documento" required></p>
            <p><input type="text" id="nombre" placeholder="Nombre Completo" required></p>
            <p><input type="text" id="clave" placeholder="Escriba su contraseña" required></p>
            <p><input type="button" id="btnCrearCuenta" value="Crear Cuenta"></p>
        </div>
    </div>
`;
    operacion.innerHTML = htmlContent


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
            
            usuarios = JSON.stringify(usuarios);
            localStorage.setItem("usuarios", usuarios);
            console.log(usuarios)
            alert("Informacion guardada")
        })
    })

//////////////////////////////////////////////////////////////////////////////////


opcConsignar.addEventListener("click", ()=>{


    operacion.innerHTML=` 
    <div>
        <p>Escriba el numero al que desea consignar para continuar</p>
        <p><input type="text" id="numeroCuentaParaConsignar" placeholder="Numero de cuenta"></p> 
        <p><input type="button" id="enviar" value="Enviar"></p>
    </div>`

    const enviarDatos = document.getElementById("enviar")
    
    enviarDatos.addEventListener("click", ()=>{
    let numeroCuentaParaConsignar = document.getElementById("numeroCuentaParaConsignar").value

        for(let key in usuarios){
            if(key == numeroCuentaParaConsignar){                
                console.log(usuarios[key].saldo)

                operacion.insertAdjacentHTML(
                    "beforeend", `   
                    <div>
                        <p>Digite la cantidad de dinero que desea ingresar</p>
                        <p><input type="number" id="valorAConsignar" placeholder="Valor a consignar"></p>
                        <p><input type="button" id="btnConsignar" value="Consignar"></p>

                        
                    </div>
                `)

                
                const btnConsignar = document.getElementById("btnConsignar")


                btnConsignar.addEventListener("click", ()=>{
                    let usuarios = localStorage.getItem("usuarios");
                    usuarios = usuarios ? JSON.parse(usuarios) : {};

                    let valorConsignar = parseInt(document.getElementById("valorAConsignar").value)

                    console.log(valorConsignar) 
                    console.log(usuarios)

                    usuarios[key].saldo += parseInt(valorConsignar)
                    console.log(usuarios[key].saldo)
                    usuarios = JSON.stringify(usuarios)
                    localStorage.setItem("usuarios", usuarios);
                })
                
                
            }
        }
    })
    })
    
//////////////////////////////////////////////////////////////////////////////////

opcRetirar.addEventListener("click", async () => {
    let loginResult = await login(); // await para esperar la respuesta de login()
    console.log(loginResult.numCuenta)
    console.log(loginResult.exito)
    if (loginResult) {
        operacion.innerHTML=` 
        <div>
            <p>Ingrese la cantidad a retirar</p>
            <p><input type="number" id="cantidadRetirar" placeholder="Cantidad a retirar"></p> 
            <p><input type="button" id="enviar" value="Enviar"></p>
        </div>`

        const enviarDatos = (document.getElementById("enviar"))
        
        
        enviarDatos.addEventListener("click", ()=>{
            const cantidadRetirar = parseInt(document.getElementById("cantidadRetirar").value)

        for (let key in usuarios){
            if (parseInt(key) === loginResult.numCuenta){
                if (cantidadRetirar <= usuarios[key].saldo){
                    usuarios[key].saldo -= cantidadRetirar
                    usuarios = JSON.stringify(usuarios)
                    localStorage.setItem("usuarios", usuarios)
                    alert("Dinero retirado con exito")
                    
                }else console.log("No hay suficiente")
            }
        }
                })
    } else {

        console.log("Login fallido");
    }
});


// let loginResult = false
// console.log(login(usuarios))

// console.log(loginResult)
// if (loginResult){
//     alert("H")

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