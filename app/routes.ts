import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
    route("noticias", "routes/noticias.tsx"), 
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;

  /* esto funciona 
  
  */

