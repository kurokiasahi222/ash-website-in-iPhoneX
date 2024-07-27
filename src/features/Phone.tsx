import { Html, ContactShadows, PresentationControls, Environment, useGLTF } from '@react-three/drei'

export default function Phone() {
    const iphoneX = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf")

    return (
        <>
            <color args={['#241a1a']} attach="background" />
            <Environment preset='city'/>
            <PresentationControls 
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-0.4, 0.4]}
                config={{mass: 2, tension: 400}}
                snap={{ mass: 4, tension: 400 }}
            >
            <primitive
                object={iphoneX.scene}
                position-y={-1.3}
            >
                <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={2}
                    position={[0.18, 1.34, 0]}
                    // rotation-x={- 0.1}
                    // rotation-={- 0.1}
                >
                    <iframe className="w-[315px] h-[655px] bg-black rounded-[43px]"
                        title='Asahi kuroki Website' src="https://ash-kuroki.dev" />
                </Html>
            </primitive>
            {/* <Float rotationIntensity={0.4}>
                

            </Float> */}
            </PresentationControls>
            <ContactShadows
                position-y={ -2 }
                opacity={ 0.4 }
                scale={ 5 }
                blur={ 2.4 }
            />
        </>
    )
}
