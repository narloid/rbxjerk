import { useState } from 'react';
import { isMobile } from 'react-device-detect';

function App() {
  const [title, setTitle] = useState('');
  const [RBXAmmount, setRBXAmmount] = useState(0);
  const [PromoCode, setPromoCode] = useState('');
  const [promoCodeBonus, setPromoCodeBonus] = useState(0);
  var FinalNumber = Number(RBXAmmount) + Number(promoCodeBonus);

  var promocodes = {
    "morbius": 400000,
    "cl4mu5fr33_rbx": 10000,
    "tiktok": 1000,
    "rbxmastee444": 2000,
    "fat": 4,
    "rbxjerkforever": Infinity,
    "deathsnail": 8008135,
    "Mario, The Idea vs. Mario, The Man": 65
  };

  function promoCodeChanged(e) {
    var element = document.getElementById("PromoCheck");
    element.classList.remove("text-red-600");
    element.classList.remove("text-green-600");
    element.classList.remove("text-white");
    setPromoCode(e.target.value)
    if (e.target.value === '') {
      element.innerHTML = "";
      setPromoCodeBonus(0);
      return
    }
    element.innerHTML = "Checking for Valid PromoCode...";
    element.classList.add("text-white");
    if (promocodes.hasOwnProperty(e.target.value)) {
      var bonus = promocodes[e.target.value]
      element.innerHTML = "Valid Promocode you have gotten <b>" + bonus.toLocaleString('en-US') + "</b> Extra RBX!";
      element.classList.remove("text-white");
      element.classList.add("text-green-600");
      setPromoCodeBonus(bonus);
    } else {
      element.innerHTML = "Invalid Promocode :(";
      element.classList.remove("text-white");
      element.classList.add("text-red-600");
      setPromoCodeBonus(0);
    }
  }

  function submitRBX(e) {
    if (title === '') {
      alert(`You didn't submit a username! We need it in order to give you your RBX`);
      return
    }
    alert(`ooo 😂\nYour ${Number(RBXAmmount) + Number(promoCodeBonus)} RBX will be delivered shortly.\nThank you ${title} for using RBXJerk!`);
  }

  return (
    <div class="sm:py-8 md:py-0 lg:py-0">
      <div class="grid place-items-center h-screen">
        <div class="rounded-lg bg-gray-700 sm:w-2/3 sm:h-fit md:w-2/3 lg:w-1/2 lg:h-fit text-white grid place-items-center text-center break-words sm:py-8 md:py-20 lg:py-16 px-2 space-y-4">
          <h1 class="sm:text-2xl md:text-3xl lg:text-4xl"><b>RBXJERK RBX Generator</b></h1>
          <label>RBX Username:</label>
          <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} class="border-black border rounded text-black px-2 w-5/6 h-8" />
          <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 place-items-center content-center">
            <button class="bg-green-600 hover:bg-green-700 rounded py-2 px-8 duration-150" onClick={() => setRBXAmmount(400)}>400 RBX</button>
            <button class="bg-green-600 hover:bg-green-700 rounded py-2 px-8 duration-150" onClick={() => setRBXAmmount(800)}>800 RBX</button>
            <button class="bg-green-600 hover:bg-green-700 rounded py-2 px-8 duration-150" onClick={() => setRBXAmmount(1700)}>1,700 RBX</button>
          </div>
          <label>RBXJerk PromoCode:</label>
          <input type="text" value={PromoCode} onChange={promoCodeChanged} class="border-black border rounded text-black px-2 w-5/6 h-8" />
          <p id="PromoCheck"></p>
          <p>RBX Ammount: <b>{FinalNumber.toLocaleString('en-US')}</b></p>
          <button class="bg-green-600 hover:bg-green-700 rounded py-2 w-4/6 duration-150" onClick={submitRBX}>Get RBX!</button>
          <a href='https://chat.rbxjerk.com/' class='text-gray-500 underline'>{isMobile ? <p>Chat with RBXJerkers</p> : <p>Happy with your RBX? Press this link to chat with other people who have used RBXJerk!</p>}</a>
        </div>
      </div>
      <div class="relative">
        <div class="absolute bottom-0 left-0 sm:h-0 md:h-auto lg:h-auto"><a onClick={() => document.getElementsByTagName('body')[0].style.backgroundImage = "url(./assets/weed.png)"} class='text-gray-300 underline cursor-pointer'>Super Secret RBXJerk Theme</a></div>
      </div>
    </div>
  );
}

export default App;
