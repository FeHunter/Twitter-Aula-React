import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ToolBar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { Adb } from '@mui/icons-material';

export function AppBar (){
    return (
        <header>
            <MuiAppBar position='sticky'>
                <Container maxWidth="xl">
                    <ToolBar >
                        <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography>Twitter</Typography>
                    </ToolBar>
                </Container>
            </MuiAppBar>
        </header>
    );
}
