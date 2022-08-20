import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

const BoxItem: React.FC<ThreeElements["mesh"]> = (props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta, frame) => {
    // console.log(state, delta, frame);
    return (mesh.current.rotation.x += 0.01);
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 5.5 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "red" : "orange"} />
    </mesh>
  );
};

const Box = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <BoxItem position={[-1.2, 0, 0]} /> */}
        <BoxItem position={[10, 0, 0]} />
      </Canvas>
    </div>
  );
};

export { Box };
