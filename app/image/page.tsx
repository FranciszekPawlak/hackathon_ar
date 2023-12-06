'use client'

import a from "@/public/a.jpg"
import b from "@/public/b.jpg"
import c from "@/public/c.jpg"

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
                            <a-nft
                                type="nft"
                                url={a}
                                smooth="true"
                                smoothCount="10"
                                smoothTolerance=".01"
                                smoothThreshold="5"
                            >
                                <a-entity material='color: #ed42df'
                                          geometry='primitive: box'
                                          gps-new-entity-place="50 150 0"
                                          scale="1 1 1"></a-entity>
                            </a-nft>
                            <a-nft
                                type="nft"
                                url={b}
                                smooth="true"
                                smoothCount="10"
                                smoothTolerance=".01"
                                smoothThreshold="5"
                            >
                                <a-entity material='color: #ed42df'
                                          geometry='primitive: box'
                                          gps-new-entity-place="50 150 0"
                                          scale="1 1 1"></a-entity>
                            </a-nft>
                            <a-nft
                                type="nft"
                                url={c}
                                smooth="true"
                                smoothCount="10"
                                smoothTolerance=".01"
                                smoothThreshold="5"
                            >
                                <a-entity material='color: #ed42df'
                                          geometry='primitive: box'
                                          gps-new-entity-place="50 150 0"
                                          scale="1 1 1"></a-entity>
                            </a-nft>
                        </a-scene>
                    </div>
                </div>}
        </>

    )
}

