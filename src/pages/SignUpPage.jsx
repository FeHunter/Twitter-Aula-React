import { Card, Checkbox, Typography } from "@mui/material";
import {CardContent} from "@mui/material";
import {TextField} from "@mui/material";
import InputMask from 'react-input-mask';

export function SignUpPage (){
    return (
        <CardContent>
            <Typography>Sign up page</Typography>
            <TextField  
                placeholder="Type your name..."
            />
            <TextField  
                placeholder="Type your surname..."
            />
            <TextField  
                type="email"
                placeholder="Type your email..."
            />
            <TextField  
                type="password"
                placeholder="Type your passowrd..."
            />
            <TextField  
                type="password"
                placeholder="Confirm your passowrd..."
            />
            <InputMask mask="(99) 99999-9999">
                {(inputProps) => (
                    <TextField
                    {...inputProps}
                    type="tel"
                    placeholder="Digite o seu celular"
                    />
                )}
            </InputMask>
            <div>
                <Checkbox />
                <Typography>Accept contract</Typography>
            </div>
        </CardContent>
    );
}