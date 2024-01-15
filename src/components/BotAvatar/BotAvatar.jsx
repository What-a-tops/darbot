import React from "react";
import "./BotAvatar.css";
import Bot from "../image/bot.svg";
const BotAvatar = () => {
   return (
      <div className="yam-bot-avatar">
         <img src={Bot} alt='' />
      </div>
   )
}

export default BotAvatar;