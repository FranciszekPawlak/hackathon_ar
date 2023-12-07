'use client'

import React from "react";
import './page.css';

export default function Page() {
    const [mapVisible, setMapVisible] = React.useState(false)
    const [mapSize, setMapSize] = React.useState(false)
    const ref = React.useRef<any>(null)

    const handleMapSize = () => {
        setMapSize((prev) => !prev)
    }

    React.useEffect(() => {
        if (ref?.current) {
            ref.current.addEventListener('markerFound', () => {
                if (!mapVisible) {
                    setMapVisible(true)
                }
            })
            ref.current.addEventListener('markerLost', () => setMapVisible(false))
        }
    }, [ref])

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script
                    src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
            </head>
            {typeof window !== "undefined" &&
                <a-scene
                    vr-mode-ui="enabled: false;"
                    renderer="logarithmicDepthBuffer: true; precision: best;"
                    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
                >
                    <a-nft
                        ref={ref}
                        type="nft"
                        url="./qr/qr"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance=".01"
                        smoothThreshold="5"
                    >
                        <a-entity
                            gltf-model="./square/Box.gltf"
                            scale="100 100 100"
                            position="0 0 0"
                        ></a-entity>

                    </a-nft>
                    <a-camera></a-camera>
                </a-scene>

            }
            {mapSize && <div style={{
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 9998, 
                backgroundColor: "white", 
                height: "100vh", 
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img style={{

                    width: "100vw",
                    height: "auto",
                    overflow: "scroll",

                }}
                     src="./mapa.png"/></div>}
            {(mapVisible || mapSize) && <button style={{
                position: "fixed",
                zIndex: 9999,
                left: "50%",
                bottom: 10,
                backgroundColor: "rgba(0,0,0,0.1)",
                transform: "translateX(-50%)",
                color: "pink",
                borderRadius: 10,
                padding: "4px 8px"
            }} onClick={handleMapSize}>Show map
            </button>}
        </>

    )
}

