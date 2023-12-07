'use client'
import {useEffect, useState} from "react"
// import CoordinatesForm from "./CoordinatesForm"

export default function Page() {
    const [form, setForm] = useState({
        latitude: '',
        longitude: '',
    })
    const [scale, setScale] = useState(1)

    const setCurrentPosition = () => {
        navigator?.geolocation?.getCurrentPosition((position: any) => {
            console.log("geolocation is here baby")
            setForm({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })
        })
    }

    useEffect(() => {
        setCurrentPosition()
    }, [])


    return (
        <>
            <head>
                <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
            </head>
            {/* {typeof window !== "undefined" &&
                <div style={{margin: 0, overflow: "hidden"}}>
                </div>} */}

        </>

    )
}

