import {useMutation} from "react-query";
import axios from "axios";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setNotification} from "../redux/notification-slice";
import {baseurl} from "../config";
import {toast} from "react-toastify";


export const useCreateOrder=(email, phone, name, claimText, isCallType=true)=>{
const baseUrl= baseurl+'orders'

    // const [allGames, setallGames] = useState([])

    const dispatch=useDispatch()
    const { isFetching, error, status, mutateAsync } = useMutation(
        "create order",
        () => axios.post(baseUrl,{email, phone, name, claimText, isCallType}),
        {
            onSuccess: ({ data }) => {

                toast.success('Заявка успешно оформленна, ожидайте звонка специалиста.')
            },
            onError: (error) => {
                toast.error('Ошибка. Не удалось отправить заявку')


            },
        }
    );
    // console.log(allGames);
    return { isLoading: isFetching,  createOrder:mutateAsync }

}