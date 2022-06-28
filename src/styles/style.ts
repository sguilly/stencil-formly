import { getBulmaClass } from "./bulma";
import { getBootstrapClass} from './bootstrap'

import { state } from '../stores/styleStore'

export function getClassNames()
{
    if(state.style == 'bulma')
    {
        return getBulmaClass()
    } else 
    if(state.style == 'bootstrap')
    {
        return getBootstrapClass()
    }
}