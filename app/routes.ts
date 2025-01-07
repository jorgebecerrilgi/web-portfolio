import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about-me", "routes/about-me.tsx"),
] satisfies RouteConfig;
