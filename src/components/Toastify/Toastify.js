
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export const successNotification = (msg) => {
    toast.success(msg, {position: toast.POSITION.TOP_RIGHT, autoClose: 2800})
}

export const errorNotification = (msg) => {
    toast.error(msg, {position: toast.POSITION.TOP_RIGHT, autoClose: 2800})
}
    
export const infoNotification = (msg) =>  {
    toast.info(msg, {position: toast.POSITION.TOP_RIGHT, autoClose: 2800})
}

export const warningNotification = (msg) =>  {
    toast.warning(msg, {position: toast.POSITION.TOP_RIGHT, autoClose: 2800})
}

