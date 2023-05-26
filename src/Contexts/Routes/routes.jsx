import { Home } from "../Screens/home"
import { Icons } from "../Components/Icon"
import { Router } from "../Screens/routes"
import { Login } from "../Screens/Login"
import { Register } from "../Screens/Login/register"
import { Logoff } from "../Screens/Login/logoff"
import { Store } from "../Screens/Store"

export const ScreenArray = [
    {
        route: 'Home',
        label: 'Home',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Home,
        notification: 0
    },
    {
        route: 'Loja',
        label: 'Loja',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Store,
        notification: 0
    }
]

export const ScreenStack = [
    {
        route: 'Routes',
        label: 'Routes',
        component: Router
    }, {
        route: 'Register',
        label: 'Register',
        component: Register
    }, {
        route: 'Logoff',
        label: 'Logoff',
        component: Logoff
    }, {
        route: 'Login',
        label: 'Login',
        component: Login
    }
]
