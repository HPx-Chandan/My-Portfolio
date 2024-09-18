import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import planeAsteroid from "../assets/3D/space_exploration_wlp_series_8.glb";

const PlaneAsteroid = (props) => {
  const { nodes, materials } = useGLTF(planeAsteroid);
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[-0.003, 0.024, -6.331]}
          rotation={[0.238, -0.545, 0.562]}
          scale={7}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={materials.scene}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </group>
  );
};

export default PlaneAsteroid;
