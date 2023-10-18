import { OrbitControls, CubeCamera, MeshRefractionMaterial } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { RGBELoader } from "three-stdlib"

// MeshReflectorMaterial : 다른 mesh가 반사되는 재질 거울, 유리, 대리석 등에 반사되는 재질을 활용

const Diamond = () => {
    const texture = useLoader(RGBELoader,
        'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.2} />
        
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} intensity={0.7} />

            <CubeCamera resolution={1024} frames={1} envMap={texture}>
                {(texture) => (
                    <mesh>
                        <dodecahedronGeometry />
                        <MeshRefractionMaterial 
                            envMap={texture}
                            toneMapped={false}

                            bounces={2}
                            aberrationStrength={0.03}
                            ior={2.5}
                            fresnel={1}
                            color="white"
                            fastChroma={true}
                        />
                    </mesh>
                )}
            </CubeCamera>

            
        </>
    )
}

export default Diamond