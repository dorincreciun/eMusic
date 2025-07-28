import type {FC, PropsWithChildren} from "react";

export const LayoutPage: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

LayoutPage.displayName = 'LayoutPage'