let notas = [];
let continuar = true ;


while(continuar){
    let pregunta = prompt(" 1)agregar. , 2)eliminar. , 3)modificar la nota. , 4) salir  ");
  
    if(pregunta == 1){
        let nueva_nota = parseFloat (prompt(" nueva nota "));
        if(nueva_nota >=0 && nueva_nota <=5){
            notas.push(nueva_nota);
        }else{
            alert(" del 1.0 al 5.0 ")
        }
    }else if( pregunta == 2){
        let posicion = parseInt (prompt("cual nota desea eliminar ?  de 1  a "+ (notas.length +1)));
        if (!isNaN(posicion) && posicion>=0 && posicion<(notas.length+1) ){
            notas.splice(posicion-1,1);
        }else{
            alert("alerta no se encuentra");
        }

    }else if(pregunta==3){
       let posicion2 = parseInt (prompt("cual es la nota que quieres cambiar ? de 1 a " +(notas.length)));
       if( !isNaN (posicion2) && posicion2>=0 && posicion2 < notas.length){
        let nota_modificada = parseFloat (prompt (" nota modificada :"));
          if(!isNaN (nota_modificada)&& nota_modificada>=0 && nota_modificada<= 5){
           notas[posicion2 -1]=nota_modificada;
          }else{
            alert (" nota incorrecta ")                 
          }

       }else{
        alert (" posicion incorrecta ");
       }


    }else if (pregunta ==4){
         continuar=false;

    }

    if ( notas.length >0){
        let promedio = notas.reduce((a,b) => a + b ,0)/ notas.length;
        alert ("notas :" + notas.join (" , ") +" \npromedio = " + promedio.toFixed(2));
    }



}