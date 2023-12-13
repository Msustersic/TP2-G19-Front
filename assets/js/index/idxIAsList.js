import { IAs_URI } from "../constantes.js";
import { Render } from "../render.js";
import { obtenerIAsList } from "./getIAs.js";

const ias = new Render("iaList");
ias.fetchData(IAs_URI, obtenerIAsList);