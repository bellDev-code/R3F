import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
// import * as THREE from "three"

// 3D 객체 선언 방법 3가지
// const BoxGeom = (props) => {
//     const geom = new THREE.BoxGeometry()
//     return <mesh {...props} geometry={geom}></mesh>
// }

const MyElement3D = () => {
    const refMesh = useRef()
    const refWireMesh = useRef()

    // UI 조절 코드
    const { xSize, ySize, zSize, xSegment, ySegment, zSegment } = useControls({
        xSize: { value: 1, min: 0.1, max: 5, step: 0.01},
        ySize: { value: 1, min: 0.1, max: 5, step: 0.01},
        zSize: { value: 1, min: 0.1, max: 5, step: 0.01},
        xSegment: { value: 1, min: 1, max: 10, step: 1},
        ySegment: { value: 1, min: 1, max: 10, step: 1},
        zSegment: { value: 1, min: 1, max: 10, step: 1},
    })

    useEffect(() => {
        refWireMesh.current.geometry = refMesh.current.geometry
    }, [xSize, ySize, zSize, xSegment, ySegment, zSegment])

    return (
        <>
        <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 1, 3]} intensity={0.5} />


        {/* 현재 mesh 두 개는 같은 코드를 사용하여 메모리 낭비가 있음 */}
        <mesh ref={refMesh}>
            <boxGeometry args={[xSize, ySize, zSize, xSegment, ySegment, zSegment]} />
            <meshStandardMaterial color="#1abc9c" />
        </mesh>

        <mesh ref={refWireMesh}>
            <boxGeometry />
            <meshStandardMaterial emissive="yellow" wireframe={true}/>
        </mesh>
        

        {/* <Box position={[1.2, 0, 0]}>
            <meshStandardMaterial color="#8e44ad" />
        </Box>

        <BoxGeom position={[-1.2, 0, 0]}>
            <meshStandardMaterial color="#e74c3c" />
        </BoxGeom> */}
        </>
    )
}

export default MyElement3D