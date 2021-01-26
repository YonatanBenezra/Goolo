import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import BagIcon from '@material-ui/icons/LocalMall';
import SwiperIcon from '@material-ui/icons/TouchApp';
import StarsIcon from '@material-ui/icons/Stars';
import { Link } from 'react-router-dom'
import './Navbar.css'
const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100vw',
    backgroundColor: '#EEE'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <Link to='/'>
      <BottomNavigationAction  label="Home" icon={<HomeIcon />} />
      </Link> */}
      {/* <Link to='/bag'>
      <BottomNavigationAction label="Bag" icon={<BagIcon />} />
        </Link> */}
        <Link to='/swiper' >
      <BottomNavigationAction label="Swiper" icon={<SwiperIcon style={{fill: '#00b3aa'}}/>} />
        </Link>
        <div className="logo"></div>
        <Link to='/BagRecommendations' >
      <BottomNavigationAction label="bagRecommendations" icon={<StarsIcon style={{fill: '#00b3aa'}}/>} />
        </Link>
    </BottomNavigation>
  );
}
