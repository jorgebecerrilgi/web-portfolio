import type { HTMLProps, ReactElement } from "react";

export interface FooterIcon extends HTMLProps<HTMLAnchorElement> {
    icon: ReactElement;
}
