'use client'

import React from "react";
import './page.css';

export default function Page() {
    const model = './buggy/Buggy.gltf'

    const [mapVisible, setMapVisible] = React.useState(false)
    const [mapSize, setMapSize] = React.useState(false)
    const init = React.useRef(false)
    
    

    const handleMapSize = () => {
        setMapSize((prev) => !prev)
    }

    React.useEffect(() => {

        const target = document.querySelector("#yolo")
        
        if (target && !init.current){
            init.current = true
            
            console.log(target)

            target.addEventListener("targetLost", () => {
                console.log("lost")
                setMapVisible(false)
            })

            target.addEventListener('targetFound', () => {
                console.log("found")
                    setMapVisible(true)
            })
            
        }
    }, [])


    const Mindar = () => <>
        <a-scene  mindar-image="imageTargetSrc: ./targets.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-assets >
                <a-asset-item  id="avatarModel" src={model}></a-asset-item>
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity  id="yolo" mindar-image-target="targetIndex: 0">
                <a-gltf-model  rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
            </a-entity>
        </a-scene>

    </>


    return (
        <>
            <head>
                <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"></script>
            </head>

            <div style={{ height: "100vh", width: "100vw", margin: 0, overflow: "hidden" }}>
                <div style={{ height: "100%", width: "100%" }}>
                    <Mindar />
                </div>

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
            </div>
        </>
    )
}



