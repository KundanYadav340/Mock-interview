import { createTheme } from '@mui/material/styles';

export const  theme = createTheme({
  palette: {
    primary: {
      main:"#267EE5",
      
    },
    light:{
      main:{
        100:"#cadff8"
        }
    },
    secondary: {
      main:"#101626"
    },
    black:{
        main:"#010101"
    },
    grey:{
        main: {
            0:"#fefefe",
            100:"#efefef",
            200:"#cdcdcd",
            300:"#aaaaaa",
            400:"#909090",
            500:"#707070",
            600:"#505050"
        }
    },
    success:{
      main:"#309930"
    },
    alert:{
      main:"#b38f00"
    },
    background:{
        main:"#f5f7fb"
    }
  },
});