import Card from '@material-ui/core/Card'
import CardContent  from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const Movie = ( {info} ) => {
    return (
            <Card>
                <CardContent>
                    <Typography>
                        <img src = {`https://image.tmdb.org/t/p/w500/${info.poster_path}?size=100`} alt = 'NA'/>
                        <h2>{info.title}</h2> 
                        <h5>Release :  {info.release_date}</h5>
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default Movie