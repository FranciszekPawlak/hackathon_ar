'use client'

import { useEffect, useState } from "react"
import CoordinatesForm from "./CoordinatesForm"

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

    if (typeof window === "undefined") {
        return null
    }

    return (
        <div style={{ height: "100vh", width: "100vw", margin: 0, overflow: "hidden" }}>
            <CoordinatesForm setForm={setForm} setCurrentPosition={setCurrentPosition} form={form} scale={scale} setScale={setScale} />
            <div style={{ height: "100%", width: "100%" }}>
                <a-scene vr-mode-ui='enabled: false'
                    arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                    renderer='antialias: true; alpha: true'>
                    <a-camera gps-new-camera='gpsMinDistance: 0; gpsTimeInterval: 0'></a-camera>
                    <a-entity material='color: #ed42df'
                        geometry='primitive: box'
                        gps-new-entity-place={`latitude: ${form.latitude}; longitude: ${form.longitude}`}
                        scale={`${scale} ${scale} ${scale}`}></a-entity>
                </a-scene>
            </div>
        </div>
    )
}

