'use client'

export default function Page() {
    const model1 = './arrow/padaka_lewo_recepcja_prawo.gltf'
    const model2 = './arrow/padaka_lewo.gltf'
    const model3 = './arrow/recepcja_prawo.gltf'

    return (
        <>
            <head>
                <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"></script>
            </head>

            <div style={{ height: "100%", width: "100%", margin: 0, overflow: "hidden" }}>
                <a-scene mindar-image="imageTargetSrc: ./targets3.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false" >
                    <a-assets>
                        <a-asset-item id="avatarModel1" src={model1} />
                        <a-asset-item id="avatarModel2" src={model2} />
                        <a-asset-item id="avatarModel3" src={model3} />
                    </a-assets>

                    <a-camera position="0 0 0" look-controls="enabled: false" />

                    <a-entity mindar-image-target="targetIndex: 0">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.05 0.05 0.05" src="#avatarModel1" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                    <a-entity mindar-image-target="targetIndex: 1">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.050 0.050 0.050" src="#avatarModel2" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                    <a-entity mindar-image-target="targetIndex: 2">
                        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.050 0.050 0.050" src="#avatarModel3" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate" />
                    </a-entity>
                </a-scene>
            </div >
        </>

    )
}

