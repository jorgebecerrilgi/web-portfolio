interface DetailsData {
    titles: string[],
    content: string[][],
}

interface DetailsProps {
    data: DetailsData,
}

const Details: React.FC<DetailsProps> = ({ data }) => {
    const { titles, content } = data;
    
    return (
        <>{
            titles.map((title, i) => {
                const items = content[i];
                return (
                    <div className="mb-[12px]" key={title}>
                        <div className="h-[2px] bg-neutral-950"></div>
                        <div className="flex justify-between">
                            <p>{title}</p>
                            <div className="text-end">{items.map(item => <p key={item}>{item}</p>)}</div>
                        </div>
                    </div>
                );
            })
        }</>
    );
};

export default Details;
