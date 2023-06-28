import {useMutation} from "react-query";
import axios from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNotification} from "../redux/notification-slice";
import {baseurl} from "../config";
import {toast} from "react-toastify";


export const useCreateContract=(arr)=>{
    const baseUrl= baseurl+'orders/contract'

    // const [allGames, setallGames] = useState([])

    const dispatch=useDispatch()
    const { isFetching, error, status, mutateAsync } = useMutation(
        "create contract",
        () => axios.post(baseUrl,arr),
        {
            onSuccess: ({ data }) => {
                toast.success('Контракт успешно создан!')
            },
            onError: (error) => {

                toast.error('Ошибка. Не удалось отправить заявку')
            },
        }
    );
    // console.log(allGames);
    return { isLoading: isFetching,  createContract:mutateAsync }

}
export const useCreateAppeal=(arr)=>{
    const baseUrl= baseurl+'orders/appeal'

    const dispatch=useDispatch()
    const { isFetching, error, status, mutateAsync } = useMutation(
        "create appeal",
        () => axios.post(baseUrl,arr),
        {
            onSuccess: ({ data }) => {
                toast.success('Претензия успешно создана!')
            },
            onError: (error) => {

                toast.error('Ошибка. Не удалось отправить заявку')
            },
        }
    );
    // console.log(allGames);
    return { isLoading: isFetching,  createAppeal:mutateAsync }

}