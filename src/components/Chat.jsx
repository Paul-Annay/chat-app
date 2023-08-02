import React from "react";
import Cam from "../pages/img/cam.png";
import Add from "../pages/img/add.png";
import More from "../pages/img/more.png";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
    return (
        <div className='chat'>
            <div className='chatInfo'>
                <span>Jane</span>
                <div className='chatIcons'>
                    <img src={Cam} alt='' />
                    <img src={Add} alt='' />
                    <img src={More} alt='' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
}

// https://youtu.be/k4mjF4sPITE?t=2340

export default Chat;
