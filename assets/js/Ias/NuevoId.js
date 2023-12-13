let maxId = 10;
let id = 10

// Función para obtener el máximo "id" del archivo JSON en línea
function obtenerMaxId() {
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

       document.getElementById("id").innerHTML = id;
 
       return {id};
     })
 }
 
 // Ejemplo de uso
 obtenerMaxId()
   .then(maxId => {
     console.log(id); // Muestra el máximo "id" del archivo JSON en línea
   });
