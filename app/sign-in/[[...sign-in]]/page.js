import { Analytics } from "@vercel/analytics/react"
import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
    return (<Container maxWidth="lg">
        <Analytics></Analytics>
        <AppBar position="static" sx = {{backgroundColor:"#3f515"}}>
            <Toolbar>
            <Typography style={{flexGrow: 1}}>
            <Button sx={{mr: 4, fontFamily: "roboto", fontSize: "20px"}} variant="text" color='inherit' href='/'>Flashcard SaaS</Button>
          </Typography>
                <Button color="inherit">
                    <Link href='/sign-in' passHref>Login</Link>
                </Button>
                <Button color="inherit">
                    <Link href='/sign-up' passHref>Sign Up</Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box display='flex' flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant="h4">Sign In</Typography>
            <SignIn/>
        </Box>
    </Container>)
}