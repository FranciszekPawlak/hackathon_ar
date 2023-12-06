'use client'

export default function Page() {


    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                        >
                        </a-entity>
                    </a-nft>
                    <a-camera></a-camera>
                </a-scene>
                        
                }
        </>

    )
}

