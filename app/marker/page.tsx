'use client'

export default function Page() {

    if (typeof window === "undefined") {
        return null
    }

    return (
        <div style={{ height: "100vh", width: "100vw", margin: 0, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "100%" }}>
                <a-scene vr-mode-ui='enabled: false'
                    arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                    renderer='antialias: true; alpha: true'>
                    <a-camera gps-new-camera='gpsMinDistance: 0; gpsTimeInterval: 0'></a-camera>
                </a-scene>
            </div>
        </div>
    )
}

