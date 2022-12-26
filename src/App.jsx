import { useState, useRef } from 'react'
import Snowfall from 'react-snowfall'
import { Fireworks } from '@fireworks-js/react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [animate, setAnimate] = useState(false);
  const textRef = useRef();
  function onSend() {
    setAnimate(true)

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "auuine@gmail.com",
      Password : "4D91BD628B4175B9BF6D6D255ADDCC7BB0E6",
      To : 'auuine@gmail.com',
      From : "auuine@gmail.com",
      Subject : "Подарочке даше",
      Body : textRef.current.value
  }).then(
    message => alert(message)
  );
  }

  return (
    <div className="App">
      <Snowfall />
      {!animate && (<>Даша, я впечатлен твоей новогодней елочкой и этими двумя рабами, хоть они и не негры. 
      Главное, что бы не хачи. Как-то раз в 12 километрах от Великого Устюга, в сказочной Вотчине, парочка хачей спиз гхм, украла рога у моих оленей.
      Я почему-то не получал письма от тебя, чего бы ты хотела на новый год? Ну там абонимент на лазером в попу или еще что-то. Вот тут форма чуть ниже, можно намекнуть
      <div>
      <textarea style={{width: "960px", height: "300px", border: 'solid 10px white', marginTop: '30px', fontSize: '32px', fontFamily: 'Pacifico'}} ref={textRef}>
      </textarea>
      </div>
      <div style={{cursor: 'pointer'}} onClick={onSend}>
        Отправить
      </div></>)}

      {animate && (<><Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: 'transparent'
      }}
    />Письмо ушло, но это не точно. Если, что то вот утишительный салют</>)} 
    </div>
  )
}

export default App
