import React, { useState } from 'react'
import "./index.css";

export default function Index() {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };

      const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
      };

      window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            <i className="fas fa-chevron-up back-to-top" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}></i>
        </div>
    )
}
