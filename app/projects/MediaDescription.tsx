interface MediaDescriptionProps {
    type: "video" | "image";
    src: string;
    placeText?: "start" | "end";
    alt?: string;
    children?: React.ReactNode;
}

const MediaDescription: React.FC<MediaDescriptionProps> = ({ type, src, placeText= "start", alt, children }) => {
    const media = type === "image"
        ? <img src={src} alt={alt}/>
        : <video src={src} autoPlay loop muted />;
    
    if (!children) return media;
    
    if (placeText === "start") {
        return (
            <div className="grid md:grid-cols-[0.225fr_1fr] items-end justify-items-end gap-5">
                <p className="row-start-2 max-w-40 md:row-start-1 md:max-w-full text-end leading-tight">{children}</p>
                {media}
            </div>
        );
    }
    
    return (
        <div className="grid md:grid-cols-[1fr_0.225fr] items-end gap-5">
            {media}
            <p className="max-w-40 md:max-w-full leading-tight">{children}</p>
        </div>
    );
};

export default MediaDescription;
