import { OrbitControls } from "@react-three/drei"
import { useEffect, useRef } from "react"

const MeshPhysicalMaterial = () => {
    const boxRef = useRef()
    const torusRef = useRef()

    useEffect(() => {
        torusRef.current.material = boxRef.current.material
    }, [])

    // images 가져오는 방법
    // const matcap = useTexture("./public/images/matcaps01.jpg")

    return (
        <>
            <OrbitControls />

            {/* <ambientLight intensity={0.2} />
        
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} /> */}

            <mesh ref={boxRef} position={[0.7, 0, 0]}>
                <torusKnotGeometry args={[0.5, 0.15, 256, 128]}/>
                {/* <meshMatcapMaterial matcap={matcap} flatShading={true} /> */}
                <meshNormalMaterial />
            </mesh>

            <mesh ref={torusRef} position={[-0.7, 0, 0]}>
                <torusGeometry args={[0.5, 0.2]} />
            </mesh>
        </>
    )
}

export default MeshPhysicalMaterial