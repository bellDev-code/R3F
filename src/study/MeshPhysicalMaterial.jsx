import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MeshPhysicalMaterial = () => {
    const boxRef = useRef()
    const torusRef = useRef()

    const { roughness, metalness, clearcoat, clearcoatRoughness } = useControls({
        roughness: { value: 0, min: 0, max: 1, step: 0.01 },
        metalness: { value: 0, min: 0, max: 1, step: 0.01},
        clearcoat: { value: 0, min: 0, max: 1, step: 0.01},
        clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01}
    })

    useEffect(() => {
        torusRef.current.material = boxRef.current.material
    }, [roughness, metalness, clearcoat, clearcoatRoughness])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
        
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            {/* meshStandardMaterial 보다 발전된 3D 물리 엔진 기반 Material */}
            <mesh ref={boxRef} position={[0.7, 0, 0]}>
                <boxGeometry />

                <meshPhysicalMaterial 
                    visible={true}
                    transparent={false}
                    opacity={1}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.FrontSide}

                    color={0xff0000}
                    emissive={0x000000}
                    roughness={roughness}
                    metalness={metalness}
                    flatShading={false}
                    wireframe={false}

                    clearcoat={clearcoat}
                    clearcoatRoughness={clearcoatRoughness}
                />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MeshPhysicalMaterial