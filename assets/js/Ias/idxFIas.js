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

            document.getElementById("nombre").value = '';
            document.getElementById("link").value = '';
            document.getElementById("image").value = '';
            document.getElementById("iasTypeID").value = '';

            obtenerMaxId().then(({ maxId, Id }) => {
               const elementId = document.getElementById("id");
               if (elementId) {
                  elementId.value = Id;
               }
            
            
               alert("Gracias por su contribución");
               window.location.href = 'https://msustersic.github.io/TP1';
            });
         } else {
            console.error("Error al enviar" + comm_request.status);
         }
      }
   };
   comm_request.setRequestHeader('Authorization',`Bearer ${TOKEN_APIIas}`);
   comm_request.send(dataForm);
});


/* btnCancelar.addEventListener('click' () => {
      window.location.href = "./index.html";
}); */