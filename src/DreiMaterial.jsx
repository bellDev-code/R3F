import { OrbitControls } from "@react-three/drei"

const DreiMaterial = () => {

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
        
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0 ]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial />
            </mesh>

            <mesh position={[0, 0, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="cyan" />
            </mesh>
        </>
    )
}

export default DreiMaterial