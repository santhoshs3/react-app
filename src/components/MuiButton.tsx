import { Stack,Button,ButtonGroup,ToggleButtonGroup,ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import  FormatBoldIcon  from "@mui/icons-material/FormatBold";
import  FormatItalicIcon  from "@mui/icons-material/FormatItalic";
import  FormatUnderlinedIcon  from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
export const MuiButton =()=>{
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="contained">contained button</Button>
                <Button variant="outlined">outlined button</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" color="primary">contained button</Button>
                <Button variant="contained" color="warning">outlined button</Button>
                <Button variant="contained" color="secondary">outlined button</Button>
                <Button variant="contained" color="error">outlined button</Button>
                <Button variant="contained" color="info">outlined button</Button>
                <Button variant="contained" color="success" size="large">outlined button</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" startIcon={<SendIcon ></SendIcon>} onClick={()=>alert('clicked')}> SEND</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <ButtonGroup variant="contained" orientation="vertical">
                    <Button>home</Button>
                    <Button>home1</Button>
                    <Button>home2</Button>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ToggleButtonGroup aria-label="text formatting" onChange={handleFormatchange}>
                    <ToggleButton value='bold' aria-label="bold"><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='Italic' aria-label="Italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value='Underlined' aria-label="Underlined"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </Stack>
        

        
    )
}