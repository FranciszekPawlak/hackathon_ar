'use client'
export default function Home() {

    if (typeof window === "undefined") {
        return null
    }


    return (
        <div style={{ height: "100vh", width: "100vw", margin: 0, overflow: "hidden" }}>
            <h1 style={{
                position: "fixed",
                zIndex: 9999,
                color: "#ed42df",
                top: 10,
                left: "50%",
                transform: "translate(-50%,0)"
            }}>PaDaKa Pany C==3</h1>
            <div style={{ height: "100%", width: "100%" }}>
                <a-scene vr-mode-ui='enabled: false'
                    arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                    renderer='antialias: true; alpha: true'>
                    <a-camera gps-new-camera='gpsMinDistance: 1'></a-camera>
                    <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: 52.235272; longitude: 20.985253" scale="10 10 10"></a-entity>

                    {/* <a-entity material='color: red' geometry='primitive: box'
                              gps-new-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>"
                              scale="10 10 10"></a-entity> */}
                    {/* <a-marker type="pattern" url="path/to/your-pattern-marker.patt">
                            <a-entity id="pointA" position="latitude: 52.235272; longitude: 20.985253"></a-entity>
                            <a-entity id="pointB" position="latitude: 52.235274; longitude: 20.985213"></a-entity>
                            <a-entity arrow="start: #pointA; end: #pointB;"></a-entity>
                        </a-marker> */}

                </a-scene>
            </div>
        </div>
    )
}

