import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";
import Home from './routes/home'; // Asegúrate de que los archivos tengan mayúsculas y minúsculas correctas
import Noticias from './routes/noticias';
import About from './routes/about';

export default [

  index("routes/home.tsx"),
  route("noticias", "routes/noticias.tsx"), 
  route("nieta", "routes/about.tsx"),
  
] satisfies RouteConfig;

