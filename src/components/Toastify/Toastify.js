
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const successNotification = (msg) => {
    toast.success(msg, {position: 'top-right', autoClose: 2800})
}

export const errorNotification = (msg) => {
    toast.error(msg, {position: 'top-right', autoClose: 2800})
}
    
export const infoNotification = (msg) =>  {
    toast.info(msg, {position: 'top-right', autoClose: 2800})
}

export const warningNotification = (msg) =>  {
    toast.warning(msg, {position: 'top-right', autoClose: 2800})
}

