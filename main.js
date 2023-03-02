let nombreCliente = prompt("ingrese su nombre y apellido");
let numeroCliente = parseInt(prompt("ingrese su numero de cliente"));

let mensaje = ("Cliente " + numeroCliente + " tiene un pedido pendiente de entrega");
alert (mensaje);

let confirmacionPedido = prompt("su pedido será el entregado el dia 02-03 de 8hs a 16hs \n¿Confirma entrega? \n1 : si \n2 : no");
    if (confirmacionPedido==1){
        alert("gracias por la confirmación")
        
    }else if(confirmacionPedido==2){
        alert("entrega cancelada, ingrese a su perfil para la reprogramacióm")
    };



  