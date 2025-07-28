import type {FC, PropsWithChildren} from "react";
/* SCSS */
import './index.scss'

export const LayoutPage: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='layout-page'>
            {children}
        </div>
    )
}

LayoutPage.displayName = 'LayoutPage'