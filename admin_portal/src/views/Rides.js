import { db } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    ride: {
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        padding: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#ffffff'
        },
        border: '1px solid',
        marginTop: '10px',
        width: '100%',
    },
}))

function Rides() {
    const classes = useStyles();
  const [rides, setRides] = useState([]);

  useEffect(() => {
    onValue(ref(db, "/All Ride Requests"), (snapshot) => {
      setRides([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((ride) => {
          console.log(ride);
          setRides((oldArray) => [...oldArray, ride]);
        });
      }
    });
  }, []);

  return (
    <div className="App">
        <Navbar />
      {rides.map((ride) => (
        <div className={classes.ride}>
          <b>From: </b>{ride.originAddress}<br/>
          <b>To: </b>{ride.destinationAddress}<br/>
          <b>Booked by: </b>{ride.userName}<br/>
          <b>Driver: </b>{ride.driverName ? ride.driverName : "Not Assigned"}<br/>
          <b>Ride status: </b>{ride.driverId == "waiting"? "waiting" : ride.status}<br/>
          {ride.status == "ended"? <div><b>Fare: </b> ₹ {ride.fareAmount}</div> : <div></div>}
          {ride.driverId == "waiting"? <Button variant="contained" color="primary">Assign Ride</Button> : <Button variant="contained" color="primary">View Trip</Button>}
        </div>
      ))}
    </div>
  );
}

export default Rides;
