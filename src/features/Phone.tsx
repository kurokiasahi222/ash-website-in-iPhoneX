import { Html, ContactShadows, PresentationControls, Environment, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';

export default function Phone() {
    const iphoneX = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf");
    const { size } = useThree();
    let isMobile = false;
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && size.width < 600) {
        isMobile = true;
    }
    return (
        <>
            <color args={['#241a1a']} attach="background" />
            <Environment preset='city' />
            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-0.6, 0.6]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 10, tension: 200 }}
            > 
            {/* <mesh> */}
                <primitive
                    object={iphoneX.scene}
                    // position-y={-1.4}
                    position-y={-1.5}
                    position-x={-0.15}
                >
                    <Html
                        center
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={2}
                        position={isMobile ? [0.17, 1.47, 0.05] : [0.17, 1.32, 0.05]}
                    >
                        <div className="size">
                            <iframe className="min-h-[655px] bg-black rounded-[37px]"
                                title='Asahi kuroki Website' 
                                src="https://ash-kuroki.dev"
                                sandbox="allow-scripts allow-same-origin" 
                                
                            />
                        </div>
                    </Html>
                </primitive>
            {/* </mesh> */}
            </PresentationControls>
            <ContactShadows
                position-y={-2}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    )
}

