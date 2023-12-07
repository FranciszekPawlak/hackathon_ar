
'use client'

import { useEffect, useRef } from "react";

export default function Page() {

    const sceneRef = useRef(null);

    useEffect(() => {
        const sceneEl = sceneRef.current;
        const arSystem = sceneEl?.systems["mindar-image-system"];
        sceneEl?.addEventListener('renderstart', () => {
            arSystem.start(); // start AR 
        });
        return () => {
            // arSystem?.stop();
        }
    }, []);


    const Mindar = () => <>
        <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-assets>
                <img id="card" src="https://www.publicdomainpictures.net/pictures/130000/velka/red-box-background.jpg" />
                {/* <img id="card" src="https://www.partridges.co.uk/pub/media/catalog/product/cache/c5704523795f2788cecb0fd6738ad131/r/e/red_box.jpg" /> */}
                <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity mindar-image-target="targetIndex: 0">
                <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
                <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-gltf-model>
            </a-entity>
        </a-scene>

    </>


    const Mindar2 = () => <>
        <a-scene mindar-image="imageTargetSrc: ./targets.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
                <a-plane color="pink" opaciy="1" position="0 0 0" height="0.552" width="0.5" rotation="0 0 0"></a-plane>
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
                    {/* <Mindar /> */}
                    <Mindar2 />
                </div>


            </div>
        </>

    )
}

