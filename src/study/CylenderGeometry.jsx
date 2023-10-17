import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useRef } from "react"


const MyElement3D = () => {
    const refMesh = useRef()
    const refWireMesh = useRef()

    // UI 조절 코드
    const { topRadius, bottomRadius, height, radialSegments, heightSegments, bOpen, thetaStart, thetaLength } = useControls({
        topRadius: { value: 1, min: 0.1, max: 5, step: 0.01},
        bottomRadius: { value: 1, min: 0.1, max: 5, step: 0.01},
        height: { value: 1, min: 0.1, max: 5, step: 0.01},
        radialSegments: { value: 32, min: 3, max: 256, step: 1},
        heightSegments: { value: 1, min: 1, max: 256, step: 1},
        bOpen: { value: false },
        thetaStart: { value: 0, min: 0, max: 360, step: 0.01},
        thetaLength: { value: 360, min: 0, max: 360, step: 0.01},
    }) 

    useEffect(() => {
        refWireMesh.current.geometry = refMesh.current.geometry
    }, [topRadius, bottomRadius, height, radialSegments, heightSegments, bOpen, thetaStart, thetaLength])

    return (
        <>
        <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 1, 3]} intensity={0.5} />


        {/* 현재 mesh 두 개는 같은 코드를 사용하여 메모리 낭비가 있음 */}
        <mesh ref={refMesh}>
            <cylinderGeometry 
                args={[topRadius, bottomRadius, height, radialSegments, heightSegments, bOpen, thetaStart * Math.PI/180, thetaLength*Math.PI/180]} />
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