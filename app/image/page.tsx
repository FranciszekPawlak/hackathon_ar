'use client'

export default function Page() {


    return (
        <>
            <head>
                <script
                    src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1c2407b26c61958baa93967b5412487cd94b290b/dist/aframe-master.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
            </head>
            {typeof window !== "undefined" &&
                <div style={{height: "100vh", width: "100vw", margin: 0, overflow: "hidden"}}>
                    <div style={{height: "100%", width: "100%"}}>
                        <a-scene
                            vr-mode-ui="enabled: false;"
                            renderer="antialias: true; alpha: true; precision: mediump;"
                            embedded
                            arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
                        >
                            

                            <a-nft
                                type="nft"
                                url="./qr"
                                smooth="true"
                                smoothount="10"
                                smoothtolerance="0.01"
                                smooththreshold="5"
                            >
                                <a-entity material='color: #ed42df'
                                          geometry='primitive: box'

                                          scale="3 3 3"></a-entity>
                            </a-nft>
                            <a-entity camera></a-entity>
                        </a-scene>
                    </div>
                </div>}
        </>

    )
}

