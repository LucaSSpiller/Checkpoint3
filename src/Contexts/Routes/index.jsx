import {Home} from '../../Screens/home';
import {Route} from '../../screens/routes';
import {Icons} from '../../components/Icon';
import {Login} from '../../screens/Login';
import {Register} from '../../screens/Login/register';
import {logoff} from '../../screens/Login/logoff';

export const ScreenArray = [
    {
        route: "Home",
        label: "Home",
        typeIcon: Icons.Feather,
        icon: "home",
        component: Home,
        notification: 0
    }
]

export const ScreenStack = [
    {
        route:"Route",
        component:Route
    },
    {
        route:"Login",
    }
]