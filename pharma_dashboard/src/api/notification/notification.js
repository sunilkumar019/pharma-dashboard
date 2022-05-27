import fetcher from "src/lib/fetcher";
import C from '../../constants';

const URL = `${C.API_URL}/notification`;

const SendNotification = async (d) => {
  let data = { ...d };
  let rs = await fetcher({ method: 'post', url: URL, data: data })
  return rs
}

// ** Get And Update Notification on Bell Icon
const GetNotification = async () => {
  let rs = await fetcher({ method: "get", url: `${URL}/get` })
  return rs
}

const UpdateNotification = async (data) => {
  let d = { ...data };
  let rs = await fetcher({ method: "post", url: `${URL}/update`, data: d })
  return rs;
}

const newUrl = `${C.API_URL}/rep/get`; 

const NotifiGetMr = async () => {
  let data = { "is_owner": false }
  let rs = await fetcher({ method: 'post', url: newUrl, data: data })
  return rs
}

const NotifiGetDistributor = async () => {
  let data = { "is_owner": true }
  let rs = await fetcher({ method: 'post', url: newUrl, data: data })
  return rs
}

export { SendNotification, NotifiGetMr, NotifiGetDistributor, GetNotification, UpdateNotification };