document.addEventListener('DOMContentLoaded',function(){
    //alert("js")
        let frm = document.getElementById('e22')
        frm.addEventListener('submit',function(){
            //alert("bt")
            event.preventDefault()
            
            let nombre= document.getElementById('tp').value
            let apellido= document.getElementById('nm').value
            let documento = document.getElementById('dc').value
            let numero=document.getElementById('te').value
            let correo=document.getElementById('cr').value
            //console.log(nombre +"\n"+  apellido + "\n" + documento + "\n" + numero + "\n" + correo)
            let resultadoNombre =[]
            for (let i = 0; i < nombre.length; i++) {
                if("0123456789".includes(nombre[i])){
                    resultadoNombre.push("No cumple");
                    break;
                }

            }
            resultadoNombre.push("cumple");
            let resultadoApellido =[]
            for (let i = 0; i < apellido.length; i++) {
                if("0123456789".includes(apellido[i])){
                    resultadoApellido.push("No cumple");
                    break;
                }

            }
            resultadoApellido.push("cumple");
            
            let resultadoDocume =[]
            for (let i = 0; i < documento.length; i++) {
                if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(documento[i])){
                    resultadoDocume.push("No cumple");
                    break;
                }

            }
            resultadoDocume.push("cumple");


            let resultado =[]
            for (let i = 0; i < numero.length; i++) {
                if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(numero[i])){
                    resultado.push("No cumple");
                    break;
                }

            }
            resultado.push("cumple");
            let resultadoCorreo = [];
            let tieneArroba = false;
            let tienePunto = false;

            for (let i = 0; i < correo.length; i++) {
                if (correo[i] === '@') {
                    tieneArroba = true;
                } else if (correo[i] === '.') {
                    tienePunto = true;
                }
            }

            if (tieneArroba && tienePunto) {
                resultadoCorreo.push("cumple");
            } else {
                resultadoCorreo.push("No cumple"); 
            }
            
            if(!nombre || !numero || !apellido || !documento || !correo){
                alert("Espacios en blanco")
            }
            
            
            let nombre1 = resultadoNombre.join("");
            let apellido1 = resultadoApellido.join("");
            let documento1= resultadoDocume.join("");
            let numero1 = resultado.join("");
            let correo1 = resultadoCorreo.join("");
            //alert( nombre1 +" :"+nombre + "\n" + apellido1 +" :"+apellido +  "\n" +   documento1 +" :"+documento  + "\n" + numero1 +" :"+numero + "\n" + correo1 +" :"+correo)
            console.log( nombre1 +" :"+nombre + "\n" + apellido1 +" :"+apellido +  "\n" +   documento1 +" :"+documento  + "\n" + numero1 +" :"+numero + "\n" + correo1 +" :"+correo)
    
    
    
        })
    
    
    
    })