import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("routes/layout.tsx", [
        route("about-me", "routes/about-me.tsx"),
    ]),
] satisfies RouteConfig;
