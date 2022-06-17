import { Typography } from "@mui/material";

export const MuiTypography = () => {
    return (
        <div>
        <Typography variant='h1'>heading</Typography>
        <Typography variant='h2' component='h1'>heading</Typography>
        <Typography variant='subtitle1'>heading</Typography>
        <Typography variant='body1' gutterBottom>heading</Typography>
        </div>
    )
    
}