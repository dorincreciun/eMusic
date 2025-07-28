import type {ReactNode} from "react";

export const LayoutPage = ({children}: {children: ReactNode}) => {
    return <div>{children}</div>
}

LayoutPage.displayName = 'LayoutPage'