import { APIIas_URI, TOKEN_APIIas } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsList } from "../index/getIAs.js";

const comments = new Render("dataList");
comments.fetchData(APIIas_URI, 
   commentsToRender, 
   {
      method: 'GET',
      headers: {
         'Authorization': `Bearer ${TOKEN_APIcomments}`
      }      
   })
