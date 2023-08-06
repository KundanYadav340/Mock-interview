import { Button } from '@mui/material';
import React,{useCallback, useState} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const FullScreens = () => {
    const handle = useFullScreenHandle();
    const [te, setTe] = useState("hwo are you");
  return (
    <div>
      <button onClick={handle.enter}>
        Enter fullscreen
      </button>

      <FullScreen handle={handle}>
        <div>
            <div style={{background:"white",width:"100%", height:"100vh"}}>
            <Button onClick={()=>setTe("Clicked")}>Click me</Button>
            <p style={{color:"gray"}}>{te}</p>
            {handle.active?"open":"not"}
            </div>
        </div>
      </FullScreen>
    </div>
  )
}

export default FullScreens;