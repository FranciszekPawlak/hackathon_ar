'use client'

import React from "react";

export default function Page() {
    const model1 = './arrow/padaka_lewo_recepcja_prawo.gltf'
    const model2 = './arrow/padaka_lewo.gltf'
    const model3 = './arrow/recepcja_prawo.gltf'

    const map1 = './map1.png'
    const map2 = './map2.png'
    const map3 = './map3.png'

    const ref1 = React.useRef<any>(null)
    const ref2 = React.useRef<any>(null)
    const ref3 = React.useRef<any>(null)

    const [map, setMap] = React.useState<any>({
        visible: false,
        map: null
    })
    const [fullScreen, setFullScreen] = React.useState(false)


    const init = React.useRef(false)


    React.useEffect(() => {
        if (!init.current) {
            init.current = true

            ref1.current.addEventListener("targetLost", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: false,
                }))
            })
            ref1.current.addEventListener("targetFound", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: true,
                    map: map1
                }))
            })
            ref2.current.addEventListener("targetLost", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: false,
                }))
            })
            ref2.current.addEventListener("targetFound", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: true,
                    map: map2
                }))
            })
            ref3.current.addEventListener("targetLost", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: false,
                }))
            })
            ref3.current.addEventListener("targetFound", () => {
                setMap((prev: any) => ({
                    ...prev,
                    visible: true,
                    map: map3
                }))
            })
        }

    }, [])



    return (
        <>
            <head>
                <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"></script>
            </head>

            <div style={{ height: "100%", width: "100%", margin: 0, overflow: "hidden" }}>
                <a-scene mindar-image="imageTargetSrc: ./targets.mind;" vr-mode-ui="enabled: false"
                    device-orientation-permission-ui="enabled: false">
                    <a-assets>
                        <a-asset-item id="avatarModel1" src={model1} />
                        <a-asset-item id="avatarModel2" src={model2} />
                        <a-asset-item id="avatarModel3" src={model3} />
                    </a-assets>

                    <a-camera position="0 0 0" look-controls="enabled: false" />

                    <a-entity ref={ref1} mindar-image-target="targetIndex: 0">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.05 0.05 0.05" src="#avatarModel1"
                            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                    <a-entity ref={ref2} mindar-image-target="targetIndex: 1">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.050 0.050 0.050" src="#avatarModel2"
                            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                    <a-entity ref={ref3} mindar-image-target="targetIndex: 2">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.050 0.050 0.050" src="#avatarModel3"
                            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                </a-scene>
            </div>
            {fullScreen && <div style={{
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
                    src={map.map} /></div>}
            {(map.visible || fullScreen) && <button style={{
                position: "fixed",
                zIndex: 9999,
                left: "50%",
                bottom: 160,
                backgroundColor: "#43B2E1",
                transform: "translateX(-50%)",
                color: "white",
                borderRadius: 10,
                padding: "8px 16px"
            }} onClick={() => setFullScreen((prev: any) => !prev)}>{fullScreen ? "Hide map" : "Show map"}
            </button>}
        </>

    )
}

