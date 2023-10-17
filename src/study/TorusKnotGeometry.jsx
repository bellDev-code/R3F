import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MeshPhysicalMaterial = () => {
    const boxRef = useRef()
    const torusRef = useRef()

    const { roughness, metalness, clearcoat, clearcoatRoughness, transmission, thickness, ior } = useControls({
        roughness: { value: 0, min: 0, max: 1, step: 0.01 },
        metalness: { value: 0, min: 0, max: 1, step: 0.01},
        clearcoat: { value: 0, min: 0, max: 1, step: 0.01},
        clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01},
        transmission: { value: 0, min: 0, max: 1, step: 0.01},
        thickness: { value: 0, min: 0, max: 10, step: 0.01},
        ior: { value: 1.5, min: 0, max: 2.333, step: 0.01}
    })

    useEffect(() => {
        torusRef.current.material = boxRef.current.material
    }, [roughness, metalness, clearcoat, clearcoatRoughness, transmission, thickness, ior])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
        
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            {/* 유리 재질 표현 */}
            <mesh ref={boxRef} position={[0.7, 0, 0]}>
                <torusKnotGeometry args={[0.5, 0.15, 256, 128]}/>

                <meshPhysicalMaterial 
                    visible={true}
                    transparent={true}
                    opacity={1}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.DoubleSide}

                    color={0xffffff}
                    emissive={0x000000}
                    roughness={roughness}
                    metalness={metalness}
                    flatShading={false}
                    wireframe={false}

                    clearcoat={clearcoat}
                    clearcoatRoughness={clearcoatRoughness}

                    transmission={transmission}
                    thickness={thickness}
                    ior={ior}
                />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MeshPhysicalMaterial