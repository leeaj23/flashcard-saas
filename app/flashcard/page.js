'use client'

import { Analytics } from "@vercel/analytics/react"
import { useUser, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useSearchParams } from "next/navigation";
import { AppBar, Toolbar, Button, Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

export default function Flashcard() {
    const {isLoaded, isSignedIn, user} = useUser();
    const [flashcards, setFlashcards] = useState([]);
    const [flipped, setFlipped] = useState([]);

    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    useEffect(()=> {
        async function getFlashcard() {
            if (!search || !user)  return;
            const colRef = collection(doc(collection(db, 'users'), user.id), search);
            const docSnap = await getDocs(colRef);
            const flashcards = []

            docSnap.forEach((doc) => {flashcards.push({id: doc.id, ...doc.data()})});
            setFlashcards(flashcards);
        }

        getFlashcard()
    }, [user, search])

    if (!isLoaded || !isSignedIn) {
        return <div></div>
    }

    const handleCardClick = (id) => {
        setFlipped((prev) => ({...prev, [id]: !prev[id],}));
    }

    return (
        <Container maxWidth="lg">
            <Analytics></Analytics>
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
        
            <Box sx={{mt: 4, textAlign:'center'}}>
                <Typography variant="h3">{search}</Typography>
                <Grid container spacing={3} sx={{ mt: 4 }}>
                    {flashcards.map((flashcard, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                        <CardActionArea onClick={() => handleCardClick(index)}>
                            <CardContent>
                            <Box sx={{
                                perspective: '1000px', 
                                '& > div': {
                                    transition: "transform 0.6s", 
                                    transformStyle: "preserve-3d", 
                                    position: 'relative', 
                                    width: "100%", 
                                    height: "200px", 
                                    boxShadow: "0, 4px, 8px, 0, rgbs(0,0,0,0.2)", 
                                    transform: flipped[index]? "rotateY(180deg)" : "rotateY(0deg)"
                                },
                                '& > div > div': {
                                    position: 'absolute', 
                                    width: "100%", 
                                    height: "100%", 
                                    backfaceVisibility: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems:"center",
                                    padding: 2,
                                    boxSizing: 'border-box'
                                },
                                '& > div > div:nth-of-type(2)': {
                                    transform: 'rotateY(180deg)'
                                },
                            }}>
                                <div>
                                <div>
                                    <Typography variant="h5" component="div">
                                    {flashcard.front}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h5" component="div">
                                    {flashcard.back}
                                    </Typography>
                                </div>
                                </div>
                            </Box>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

