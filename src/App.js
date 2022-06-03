import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [RBXAmmount, setRBXAmmount] = useState(0);
  const [PromoCode, setPromoCode] = useState('');
  const [promoCodeBonus, setPromoCodeBonus] = useState('');

  var promocodes = {
    "morbius": 400000,
    "cl4mu5fr33_rbx": 10000,
    "tiktok": 1000,
    "rbxmastee444": 2000,
    "fat": 4
  };

  function promoCodeChanged(e) {
    setPromoCode(e.target.value)
    if (e.target.value === '') {
      document.getElementById("PromoCheck").innerHTML = "";
      setPromoCodeBonus(0);
      return
    }
    document.getElementById("PromoCheck").innerHTML = "Checking for Valid PromoCode...";
    if (promocodes.hasOwnProperty(e.target.value.toLowerCase())) {
      document.getElementById("PromoCheck").innerHTML = "Valid Promocode you have gotten <b>" + promocodes[e.target.value] + "</b> Extra RBX!";
      setPromoCodeBonus(promocodes[e.target.value]);
    } else {
      document.getElementById("PromoCheck").innerHTML = "Invalid Promocode :(";
      setPromoCodeBonus(0);
    }
  }

  function submitRBX(e) {
    e.preventDefault();
    alert(`ooo 😂\nYour ${Number(RBXAmmount) + Number(promoCodeBonus)} RBX will be delivered shortly.\nThank you for using RBXJerk.com`)
  }

  return (
    <>
      <h1>GET YOUR FREE RBX TODAY!</h1>
      <h3>Website is still under development the UI is subject to change.</h3>
      <form onSubmit={submitRBX}>
        <label>RBX Username:</label>
        <br></br>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <br></br>
        <br></br>
        <label>Ammount of RBX:</label>
        <br></br>
        <input type="range" min="1" max="1000" value={RBXAmmount} onChange={(e) => setRBXAmmount(e.target.value)} required/>
        <br></br>
        <br></br>
        <label>RBXJerk PromoCode:</label>
        <br></br>
        <input type="text" value={PromoCode} onChange={promoCodeChanged} />
        <p id="PromoCheck">Checking for Promo Code...</p>
        <p>RBX Ammount: <b>{Number(RBXAmmount) + Number(promoCodeBonus)}</b></p>
        <button>Get RBX!</button>
      </form>
      <br />
      <br />
      <h1>Hacvked...!</h1>
      <a href="https://chat.rbxjerk.com">Direct Link</a>
      <br />
      <iframe src="https://chat.rbxjerk.com/" width="100%" height="500px"></iframe>
    </>
  );
}

export default App;
