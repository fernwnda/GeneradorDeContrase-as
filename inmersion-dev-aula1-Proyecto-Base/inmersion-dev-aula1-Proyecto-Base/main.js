let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar(){

    let numeroDijitado = parseInt (cantidad.value);
    
    if( numeroDijitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    
    let password = '';
    for(let i=0; i < numeroDijitado; i++){
       
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;


    }

      contrasena.value = password;

}



 







