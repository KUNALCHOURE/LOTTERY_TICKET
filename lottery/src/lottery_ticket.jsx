import { useEffect, useState } from 'react';
import './lottery_ticket.css'
import {generateticket} from './helper';
import { sum } from './helper';
import confetti from 'canvas-confetti'
export default function Ticket()
{
   let[ticket,setticket]=useState([0,0,0]);
   let iswining=sum(ticket)===15;
   let buy=()=>{
      setticket(generateticket(3));
   }
   const triggerConfetti = () => {
      confetti({
         particleCount: 200,
         spread: 70,
         origin: { y: 0.6 }
      });
   }
   useEffect(()=>{
      if(iswining){
      triggerConfetti();
      }

   },[iswining]);

 return(
    <>
   <div className="container">
    <div className="heading">
      <h1>LOTTERY</h1>
      <p>Take lottery and get a chance to win prizes !!</p>
      <p> If you got the sum 15 then you win</p>

      </div>
      <div className="ticket">
         <h2>TICKET</h2>
         <div className="num">
         <span>{ticket[0]}</span>
         <span>{ticket[1]}</span>
         <span>{ticket[2]}</span>
         </div>

         <button onClick={buy}>BUY TICKET</button>
      </div>
      <div className="message">
      <h3>{iswining ? "HURRAY YOU WON!!":"PLAY AGAIN"}</h3>
      </div>
      </div>
    </>
 );
}