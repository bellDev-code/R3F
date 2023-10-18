import { OrbitControls, useTexture } from "@react-three/drei";

const ImageMesh = () => {
    const textures = useTexture({
        map: "./public/images/glass/Glass_window_002_basecolor.jpg"
    })
    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.1} />

            <directionalLight position={[0, 1, -8]} intensity={0.4} />
            <directionalLight position={[1, 2, 8]} intensity={0.4} />

            <mesh>
                <cylinderGeometry args={[2, 2, 3, 1024, true]} />
                <meshStandardMaterial map={textures.map} />
            </mesh>
        </>
    )
}

export default ImageMesh;