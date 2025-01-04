import type { HTMLProps, ReactElement } from "react";

export interface FooterLinks extends HTMLProps<HTMLAnchorElement> {
    icon: ReactElement;
}
