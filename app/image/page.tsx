'use client'

export default function Page() {


    return (
        <>
            <head>
                <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
            </head>
            {typeof window !== "undefined" &&
                <div style={{height: "100vh", width: "100vw", margin: 0, overflow: "hidden"}}>
                    <div style={{height: "100%", width: "100%"}}>
                        <a-scene vr-mode-ui='enabled: false'
                                 arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                                 renderer='antialias: true; alpha: true'>
                            <a-camera gps-new-camera='gpsMinDistance: 0; gpsTimeInterval: 0'></a-camera>
                        </a-scene>
                    </div>
                </div>}
        </>

    )
}

