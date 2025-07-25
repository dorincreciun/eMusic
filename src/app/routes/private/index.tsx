import {AuthGuard} from "../guards/AuthGuard.tsx";

export const privateRoutes = [
    {
        path: "/dashboard",
        element: <div></div>,
    },
];

export const guardRoutes = {element: <AuthGuard/>, children: [...privateRoutes]};