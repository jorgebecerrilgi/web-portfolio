interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    size?: "small" | "large";
}

const Section: React.FC<SectionProps> = ({ className, size = "small", children, ...props }) => {
    return (
        <section
            className={`
                min-h-[100vh]
                m-auto px-[32px]
                content-center
                ${className}
                ${size === "small" ? "max-w-[720px]" : ""}
            `}
            style={{ minHeight: "100dvh" }}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
