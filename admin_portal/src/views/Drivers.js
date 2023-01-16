import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import bike from "../images/bike.png";
import vahanMax from "../images/vahan-max.png";
import vahanMini from "../images/vahan-mini.png";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Rating } from 'react-simple-star-rating';

const useStyles = makeStyles((theme) => ({
    driver: {
        display: 'flex',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        padding: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffffff'
        },
        border: '1px solid',
        marginTop: '10px',
    },

    vehicleImg: {
        width: 'auto',
        height: '60px',
        marginRight: '20px'
    },
}))

function Drivers() {
    const classes = useStyles();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    onValue(ref(db, "/drivers"), (snapshot) => {
      setDrivers([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((driver) => {
          console.log(driver);
          setDrivers((oldArray) => [...oldArray, driver]);
        });
      }
    });
  }, []);

  return (
    <div className="App">
        <Navbar />
      {drivers.map((driver) => (
        <div className={classes.driver}>
            <img className={classes.vehicleImg} src={driver.car_details.type == "vahan-mini" ? vahanMini : driver.car_details.type == "vahan-max" ? vahanMax : bike} alt="Vehicle Icon" />
          <h1>{driver.name}</h1>
          <Rating initialValue={driver.ratings} allowFraction="true" transition="false"/>
          <h1>₹ {driver.earnings}</h1>
          <h1>{driver.newRideStatus == "idle"? "Idle" : "On Trip"}</h1>
          <Button variant="contained" color="primary">{driver.newRideStatus == "idle"? "Assign Ride" : "View Location"}</Button>
        </div>
      ))}
    </div>
  );
}

export default Drivers;
