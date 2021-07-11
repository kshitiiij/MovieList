import Box from '@material-ui/core/Box'

const Movie = ( {info} ) => {
    return (
        <Box>
            <img src = {`https://image.tmdb.org/t/p/w500/${info.poster_path}?size=100`} alt = 'NA'/>
            <h3>{info.title}</h3>    
        </Box>
    )
}

export default Movie