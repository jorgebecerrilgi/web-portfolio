interface Vector2 {
    x: number;
    y: number;
}

interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Color extends RGBA {
    hex: string;
}

type Routename = "about-me" | "globo-politico" | "historico-de-performance" | "other-projects";
