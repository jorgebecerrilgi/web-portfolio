interface MotionEnterProps {
    children: React.ReactNode;
    size?: "small" | "large";
}

const MotionEnter: React.FC<MotionEnterProps> = ({ size = "small" , children }) => {
    return (
        <div className={`
            intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[10%] motion-delay-200
            ${size === "small" ? "py-4" : "py-14"}
        `}>
            {children}
        </div>
    );
};

export default MotionEnter;