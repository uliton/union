import axios from "axios";

const TOKEN = '6116137615:AAFPkZMhlxYR5LMcl1QtdlT8GqH36uy-k4k';
const CHAT_ID = '-1001247322645';
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage?`;

export const sendMessage = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, 0);
  const minuts = date.getMinutes().toString().padStart(2, 0)
  const seconds = date.getSeconds().toString().padStart(2, 0)
  const day = date.getDay().toString().padStart(2, 0);
  const month = (date.getMonth() + 1).toString().padStart(2, 0);
  const year = date.getFullYear().toString().padStart(2, 0);
  const actualTime = `${hours}:${minuts}:${seconds} - ${day}.${month}.${year}`;

  let message = '<b>Серый! Иди смотреть обновления!</b>\n';
  message += `${actualTime}`;
  // message += `<b>С страны </b>\n`

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  }).then(() => {
    console.log('procesing');
  }).catch(() => {
    console.log('nop');
  }).finally(() => {
    console.log('message sent');
  });
};
