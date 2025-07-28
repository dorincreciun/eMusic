import type {FC, PropsWithChildren} from "react";

export const LayoutApp: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='container-fluid'>
            {children}
        </div>
    )
}

LayoutApp.displayName = 'LayoutApp'