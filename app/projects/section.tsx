interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    size?: "small" | "large";
    dynamicHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({ className, size = "small", dynamicHeight, children, ...props }) => {
    return (
        <section
            className={`
                min-h-[100vh]
                m-auto px-[32px]
                content-center
                ${className}
                ${size === "small" ? "max-w-[720px]" : ""}
            `}
            style={{ minHeight: dynamicHeight ? "100dvh" : "" }}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
