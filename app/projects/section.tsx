interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {}

const Section: React.FC<SectionProps> = ({ className, children, ...props }) => {
    return (
        <section className={`min-h-[100vh] max-w-[720px] m-auto px-[64px] content-center ${className}`} {...props}>
            {children}
        </section>
    );
};

export default Section;
