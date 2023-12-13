import { APIIas_URI, TOKEN_APIIas } from "../constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', async () => {
   
   const fLogin = document.querySelector('#fLogin');
   
   let dataForm = new FormData(fLogin);   
   dataForm.append('contactDate', new Date().toString());
   /* console.log("dataForm: " + JSON.stringify(dataForm)); */
   
   let comm_request = new XMLHttpRequest();
   
   comm_request.open("POST", APIIas_URI, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            obtenerMaxId().then(NuevoId => {
               dataForm.set('id', NuevoId);
               comm_request.setRequestHeader('Authorization', `Bearer ${TOKEN_APIIas}`);
               comm_request.send(dataForm);
            });  
            
            //document.getElementById("id").value = NuevoId;
            document.getElementById("nombre").value = '';
            document.getElementById("link").value = '';
            document.getElementById("image").value = '';
            document.getElementById("iasTypeID").value = '';
            alert("Gracias por sus contribucion");
            window.location.href = 'https://msustersic.github.io/TP1'; //tubimos que usar una referencia absoluta xq el codigo de js se abre desde distintos lugares;
         } else {
            console.error("Error al enviar" + comm_request.status);
         }
      }
   };
   comm_request.setRequestHeader('Authorization',`Bearer ${TOKEN_APIIas}`);
   comm_request.send(dataForm);
});

  let maxId = 10;
   let id = 10;
   
   // Función para obtener el máximo "id" del archivo JSON en línea
   function NuevoId() {
      const url = "https://sheetdb.io/api/v1/bydp3qdz5al4n";
    
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          maxId = 10;
    
          data.forEach(obj => {
            if (obj.id > maxId) {
              maxId = obj.id;
            }
          });
          maxId++; //se incremente maxId en 1
          id = maxId; //se nombra NuevoId como el resultado de maxId+1
   
          document.getElementById("Id").innerHTML = id;

    
          return {id};
        })
    };
   


/* btnCancelar.addEventListener('click' () => {
      window.location.href = "./index.html";
}); */