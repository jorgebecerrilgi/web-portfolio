interface ExperienceProps {
    title: string;
    company: string;
    date: string;
    location: string;
    children: React.ReactNode;
}

const Experience: React.FC<ExperienceProps> = ({ title, company, date, location, children }) => {
    return (
        <div className="my-10">
            <div className="flex flex-col gap-[4px] mb-[16px]">
                <div className="flex justify-between">
                    <p>{title}</p>
                    <p className="text-end">{date}</p>
                </div>
                <div className="h-[2px] bg-neutral-950"></div>
                <div className="flex justify-between">
                    <p>{company}</p>
                    <p className="text-end">{location}</p>
                </div>
            </div>
            <div className="max-w-[400px] ml-auto">{children}</div>
        </div>
    );
};

export default Experience;
