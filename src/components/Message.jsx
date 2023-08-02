import React from "react";

function Message() {
    return (
        <div className='message owner'>
            <div className='messageInfo'>
                {/* <img
                    src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'
                    alt=''
                /> */}
                <span>just now</span>
            </div>
            <div className='messageContent'>
                <p>hello</p>
                <img src='' alt='' />
            </div>
        </div>
    );
}

export default Message;
