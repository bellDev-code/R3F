import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const MeshPhongMetarial = () => {
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
                {/* meshLambertMaterial 보다 더욱 정교한 쉐이딩 효과를 볼 수 있다 */}
                <meshPhongMaterial 
                    visible={true}
                    transparent={false}
                    opacity={1}
                    depthTest={true}
                    depthWrite={true}
                    side={THREE.FrontSide}

                    color={0xff0000}
                    emissive={0xff0000}
                    specular={0xffff00} // 광원에 의하여 반사되는 색상값
                    shininess={100}
                    flatShading={true}
                    wireframe={false}
                />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MeshPhongMetarial