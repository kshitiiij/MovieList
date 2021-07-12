import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {useState} from 'react'

const Header = ({onClick , type}) => {

    const [anchor, setAnchor] = useState(null);
    const handleClick = e => {
        setAnchor(e.currentTarget);
    }


    const handleClose = (type) => {
        setAnchor(null);
        onClick(type);
    }

    
    return (
        <div className = 'header'>
            <h1>Movies </h1>
            <Button  background = 'black' className = 'btn' onClick = {handleClick}>
                    {type}
            </Button>
            <Menu 
                anchorEl = {anchor}
                open = {Boolean(anchor)}
                autoFocus = {true} >
                <MenuItem onClick = {() => handleClose('now_playing') } >Now Playing</MenuItem>
                <MenuItem onClick = {() => handleClose('popular') } >Popular</MenuItem>
                <MenuItem onClick = {() => handleClose('top_rated') } >Top Rated</MenuItem>
                <MenuItem onClick = {() => handleClose('upcoming') } >Upcoming</MenuItem>
            </Menu>
            
        </div>

    );
}

export default Header