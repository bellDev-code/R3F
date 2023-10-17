import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MaterialEx = () => {
    const boxRef = useRef()
    const torusRef = useRef()

    useEffect(() => {
        torusRef.current.material = boxRef.current.material
    }, [])

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            <mesh ref={boxRef} position={[0.7, 0, 0]}>
                <boxGeometry />
                <meshLambertMaterial 
                    visible={true}
                    transparent={false}
                    opacity={1}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.FrontSide}

                    color={"#d25383"}
                    wireframe={false}
                    emissive={0x666600} // 재질 자체에서 방출하는 색상값 
                />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MaterialEx