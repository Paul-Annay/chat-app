import React from "react";

function Navbar() {
    return (
        <div className='navbar'>
            <span className='logo'>DevChat</span>
            <div className='user'>
                <img
                    src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'
                    alt=''
                />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    );
}

export default Navbar;
