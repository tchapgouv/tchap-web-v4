import React from "react";

import "../../../res/css/common/_TchapAnchor.pcss";

interface TchapAnchorProps {
    children: React.ReactNode;
    className?: string;
    href: string;
    openInNewTab?: boolean;
}

export const TchapAnchor: React.FC<TchapAnchorProps> = ({
    children,
    className,
    href,
    openInNewTab,
}: TchapAnchorProps) => {
    return (
        <a
            className={`tc_anchor ${className}`}
            href={href}
            target={openInNewTab && '_blank'}
        >
            { children }
        </a>
    );
};
