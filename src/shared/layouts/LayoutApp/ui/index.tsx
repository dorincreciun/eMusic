import type {ReactNode} from "react";

export const LayoutApp = ({children}: {children: ReactNode}) => {
    return <div>{children}</div>
}

LayoutApp.displayName = 'LayoutApp'