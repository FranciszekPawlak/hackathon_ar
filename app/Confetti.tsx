import React from "react";
import {getDistanceFromLatLonInM} from "./helper";
import Confetti from 'react-confetti'

const distanceToArea = 10


export default function ConfettiComponent() {
    const [confetti, setConfetti] = React.useState(false)

    const checkIsInArea = (lat: any, lon: any) => {
        const destination = {
            latitude: 52.230136,
            longitude: 20.981345 //ostatni kot przy kuchni
        }
        console.log(lat, lon)
        const distance = getDistanceFromLatLonInM(destination.latitude, destination.longitude, lat, lon);
        if (distance <= distanceToArea) {
            setConfetti(true)
        } else {
            setConfetti(false)
        }
    }

    React.useEffect(() => {
        navigator.geolocation.watchPosition((p) => {
            const {latitude, longitude} = p.coords
            checkIsInArea(latitude, longitude)
        }, () => {
            console.log("turn on gps")
        }, {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0,
        });


    }, [])
    return <Confetti run={confetti}/>
}