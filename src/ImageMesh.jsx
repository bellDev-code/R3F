import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three"

const ImageMesh = () => {
    const textures = useTexture({
        map: "./public/images/glass/Glass_window_002_basecolor.jpg",
        roughnessMap: "./public/images/glass/Glass_window_002_roughness.jpg",
        metalnessMap: "./public/images/glass/Glass_window_002_metallic.jpg",
        normalMap: "./public/images/glass/Glass_window_002_normal.jpg",
        displacementMap: "./public/images/glass/Glass_window_002_height.png",
        aoMap: "./public/images/glass/Glass_window_002_ambientOcclusion.jpg"
    })

    const mesh = useRef()

    useEffect(() => {
        mesh.current.geometry.setAttribute("uv2",
            new THREE.BufferAttribute(mesh.current.geometry.attributes.uv.array, 2)
        )
    }, [])
    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 1, -8]} intensity={0.4} />
            <directionalLight position={[1, 2, 8]} intensity={0.4} />

            <mesh ref={mesh}>
                {/* 256 256 segment 값 */}
                <cylinderGeometry args={[2, 2, 3, 256, 256, true]} />
                <meshStandardMaterial
                    // wireframe={true}
                    side={THREE.DoubleSide}

                    map={textures.map}

                    roughnessMap={textures.roughnessMap}
                    roughnessMap-colorSpace={THREE.NoColorSpace}

                    metalnessMap={textures.metalnessMap}
                    metalnessMap-colorSpace={THREE.NoColorSpace}
                    metalness={0.5}

                    // 입체감을 나타내는 눈속임
                    normalMap={textures.normalMap}
                    normalMap-colorSpace={THREE.NoColorSpace}
                    normalScale={1}

                    // geometry의 정점 좌표를 변경한다.
                    // 더 많은 메모리와 연산량을 필요로한다.
                    displacementMap={textures.displacementMap}
                    displacementMap-colorSpace={THREE.NoColorSpace}
                    // 원래 mesh값보다 커지므로
                    displacementScale={0.2}
                    displacementBias={-0.2}
                    
                    // ambientOcclusion은 mesh 표면에 이미 만들어준 그림자
                    aoMap={textures.aoMap}
                />
            </mesh>
        </>
    )
}

export default ImageMesh;