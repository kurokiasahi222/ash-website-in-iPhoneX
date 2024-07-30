import { useEffect, useRef, useState } from 'react';
import { Html, ContactShadows, PresentationControls, Environment, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import { Box3, Vector3 } from 'three';
import "./styles.css"

export default function Phone() {
    const iphoneX = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf");
    
    const { size } = useThree();
    const isMobile = size.width < 600;
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
                <primitive
                    object={iphoneX.scene}
                    position-y={-1.4} 
                    position-x={-0.15} 
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={2}
                        position={isMobile ? [0.17, 1.47, 0.05] : [0.17, 1.32, 0.05]}
                    // rotation-x={- 0.1}
                    // rotation-={- 0.1}
                    >
                        <div className="size">
                            <iframe className="h-[655px] bg-black rounded-[37px]"
                                title='Asahi kuroki Website' src="https://ash-kuroki.dev" />
                        </div>
                       
                    </Html>
                </primitive>
                {/* <Float rotationIntensity={0.4}>
                

            </Float> */}
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

