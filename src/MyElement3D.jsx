import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef } from "react"


const MyElement3D = () => {
    const refMesh = useRef()
    const refWireMesh = useRef()

    // UI 조절 코드
    const { topRadius } = useControls({
        topRadius: { value: 1, min: 0.1, max: 5, step: 0.01}
    }) 

    useEffect(() => {
        refWireMesh.current.geometry = refMesh.current.geometry
    }, [topRadius])

    return (
        <>
        <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 1, 3]} intensity={0.5} />


        {/* 현재 mesh 두 개는 같은 코드를 사용하여 메모리 낭비가 있음 */}
        <mesh ref={refMesh}>
            <cylinderGeometry 
                args={[topRadius]} />
            <meshStandardMaterial color="#1abc9c" />
        </mesh>

        <mesh ref={refWireMesh}>
            <boxGeometry />
            <meshStandardMaterial emissive="yellow" wireframe={true}/>
        </mesh>

        <axesHelper scale={10} />
        </>
    )
}

export default MyElement3D