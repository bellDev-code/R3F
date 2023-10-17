import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MaterialEx = () => {
    const boxRef = useRef()
    const boxTwoRef = useRef()
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
                {/* 광원에 영향을 미치지 않는 meshBasicMaterial */}
                <meshBasicMaterial 
                    color="yellow" 
                    wireframe={false}
                    visible={true}
                    transparent={true}
                    opacity={0.5}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh ref={boxTwoRef} position={[2, 0, 0]}>
                <boxGeometry />
                <meshLambertMaterial 
                    color="yellow" 
                    wireframe={false}
                    visible={true}
                    transparent={true}
                    opacity={1}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.FrontSide}
                />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MaterialEx