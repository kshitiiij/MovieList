import { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Movie from './Movie'
import Header from './Header'


const Movies = () => {
    const [data, setData] = useState([]);
    
    const [type, setType] = useState("now_playing");

    const handleType = (type) => {
        setType(type);
        console.log("selected",type);
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=29c21283c35b26da96c3d693ef192f60`)
        .then(response => response.json())
        .then(data => {setData(data.results)})
        
    })

    return (

    <Box>  
        <Header onClick = {handleType} type = {type}/>  
        <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        spacing = {3}>
                {data.map((info) => (
                    <Grid>
                            <Movie info = {info}/>    
                    </Grid>
                ))}
        </Grid>
    </Box>           
    )
}

export default Movies