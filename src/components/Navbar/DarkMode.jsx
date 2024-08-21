
import React, { useEffect, useState } from 'react'
import lightButton from '../../assets/website/light-mode-button.png'
import darkButton from '../../assets/website/dark-mode-button.png'

const DarkMode = () => {
    const [theme,setTheme] =useState(
        localStorage.getItem("theme")? localStorage.getItem("theme"): "light"
    )

    const element = document.documentElement;
    
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        if(theme == 'dark'){
            element.classList.add('dark')
        }else{
            element.classList.remove('dark')
        }
    },[theme])

  return (
    <div className='relative'>
      <img src={lightButton} alt="" 
      onClick={()=>setTheme(theme==="dark"?  'light' : "dark")}
      className={`w-12 cursor-pointer absolute right-0
       ${theme === "dark"? "opacity-0" : "opacity-100"}`}
      />
      <img src={darkButton} alt="" 
      onClick={()=>setTheme(theme==="dark"?  'light' : "dark")}
      className={`w-12 cursor-pointer`}
      />
    </div>
  )
}

export default DarkMode