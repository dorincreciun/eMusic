import type {FC, PropsWithChildren} from "react";
/* SCSS */
import './index.scss'

export const LayoutApp: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='layout-app'>
            {children}
        </div>
    )
}

LayoutApp.displayName = 'LayoutApp'