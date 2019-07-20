import Home from "../views/Home";
import Shou from "../views/Shou";
import Head from "../views/son/Head";
import Bao from "../views/son/Bao";
import Dai from "../views/son/Dai";
import Zhuan from "../views/son/Zhuan";

export const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/shou",
        component: Shou,
        children: [
            {
                path: "/shou/head",
                component: Head
            },
            {
                path: "/shou/bao",
                component: Bao
            },
            {
                path: "/shou/dai",
                component: Dai
            },
            {
              path:"/shou/zhuan",
              component:Zhuan  
            }



        ]
    }



]
