export function obtenerIAsList(data) {
   let items = "";

   if (!data) {
      console.log("la lista de IAs se encuentra vacía");
      return;
   }

   data.forEach((item) => {
      let itemPattern = `
         <li>
         <a href="${item.link}" target="_blank">
         <img src="${item.image}" title= "${item.nombre}" alt="${item.nombre} site">
         </li>`;
      items += itemPattern;
   });
   return items;
};