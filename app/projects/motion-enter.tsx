interface MotionEnterProps {
    children: React.ReactNode;
}

const MotionEnter: React.FC<MotionEnterProps> = ({ children }) => {
    return (
        <div className="py-3 intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[10%] motion-delay-200">
            {children}
        </div>
    );
};

export default MotionEnter;