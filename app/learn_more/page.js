import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container, Toolbar, Typography, Button, AppBar, Box, Grid  } from "@mui/material";

export default function LearnMore() {
    return (<Container maxWidth="lg">
        <AppBar position='static'>
            <Toolbar>
            <Typography style={{flexGrow: 1}}>
                <Button sx={{mr: 4, fontFamily: "roboto", fontSize: "20px"}} variant="text" color='inherit' href='/'>Flashcard SaaS</Button>
            </Typography> 
            <SignedOut>
                <Button color="inherit" href="/sign-in">Login</Button>
                <Button color="inherit" href="/sign-up">Sign Up</Button>
            </SignedOut>
            <SignedIn>
                <Button sx={{mr: 4}} variant="outlined" color='inherit' href='/flashcards'>Current Decks</Button>
                <Button sx={{mr: 4}} variant="outlined" color='inherit' href='/generate'>Generate Deck</Button>
                <UserButton/>
            </SignedIn>
            </Toolbar>
        </AppBar>

        <Box sx={{textAlign: 'center', my: 4}}>
            <Typography variant="h2" component="h1" gutterBottom>
            What is Flashcard SaaS ?
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{paddingLeft: '100px', paddingRight:"100px"}}>
            The easiest way to create flashcards from your text. This application takes in your input text and simplifies it into
            10 easy-to-read flashcards for your convienience, allowing you to study your content in a more streamlined way. 
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{paddingLeft: '100px', paddingRight:"100px"}}>
            Choose between our free, basic, and pro plans to fit your flashcard needs.
            </Typography>
            <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/">
            Back
            </Button>
            <Button variant="outlined" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
            Get Started
            </Button>
        </Box>
    </Container>);
}