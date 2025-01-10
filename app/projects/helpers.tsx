export const getScrollPercentage = (sections: HTMLElement[]): number => {
    const len = sections.length;
    const percentageBetweenSections = 1 / (len - 1);
    for (let i = 0; i < len; i++) {
        const { bottom, height } = sections[i].getBoundingClientRect();
        if (bottom > height / 2) return i * percentageBetweenSections;
    }
    return 0;
};

export const renderLines = (sections: HTMLElement[], hex: string) => {
    return sections.slice(1).map((_, i) => {
        const total = sections.length;
        const height = (400 - (16 * total)) / (total - 1);
        return (
            <div
                className={`
                    h-[2px] w-full
                    lg:w-[2px] lg:h-full
                    duration-200
                `}
                style={{ backgroundColor: hex }}
                key={i}
            ></div>
        );
    });
};

export const renderSectionNames = (sections: HTMLElement[]) => {
    return sections.map((section) => {
        const { id } = section;
        const name = id.split("-").join(" ").toUpperCase();
        
        return (
            <li
                className="-rotate-[0.25rad] w-min -translate-x-1/3 lg:translate-x-0 text-wrap lg:text-nowrap"
                key={id}
            >
                <a href={`#${id}`} aria-label={`Go to ${name}`}>{name}</a>
            </li>
        );
    });
};

export const renderStations = (sections: HTMLElement[], hex: string) => {
    return sections.map(({ id }) => (
        <div
            className="w-[16px] h-[16px] rounded-full border-4 border-solid duration-200"
            style={{ borderColor: hex }}
            key={id}
        ></div>
    ));
};
