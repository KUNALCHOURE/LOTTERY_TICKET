import { useState } from 'react';
import './lottery_ticket.css'
import {generateticket} from './helper';
import { sum } from './helper';
export default function Ticket()
{
   let[ticket,setticket]=useState([0,0,0]);
   let iswining=sum(ticket)===15;
   let buy=()=>{
      setticket(generateticket(3));
   }

 return(
    <>
   <div className="container">
    <div className="heading">
      <h1>LOTTERY</h1>
      <p>Take lottery and get a chance to win prizes !!</p>

      </div>
      <div className="ticket">
         <h3>TICKET</h3>
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