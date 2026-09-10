import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { Box3, Vector3 } from "three";
import { AnimatePresence, motion } from "framer-motion";
import { Rotate3d, RotateCcw } from "lucide-react";

type MenuViewer3DProps = {
  src: string;
  name?: string;
  autoRotate?: boolean;
  height?: number | string;
  className?: string;
};

function FittedModel({ src }: { src: string }) {
  const { scene } = useGLTF(src);

  const transform = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    const size = box.getSize(new Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 1e-4);
    const scale = Math.min(2.2 / maxDim, 6);
    const bottom = box.min.y;
    return { scale, position: [0, -bottom * scale, 0] as [number, number, number] };
  }, [scene]);

  return <primitive key={src} object={scene} scale={transform.scale} position={transform.position} />;
}

function LoadingBridge({ onProgress }: { onProgress: (p: number) => void }) {
  const { active, progress } = useProgress();
  useEffect(() => {
    onProgress(active ? progress : 100);
  }, [active, progress, onProgress]);
  return null;
}

function Rig({
  src,
  rotate,
  onControls,
}: {
  src: string;
  rotate: boolean;
  onControls: (c: OrbitControlsImpl | null) => void;
}) {
  const controls = useRef<OrbitControlsImpl>(null);

  useEffect(() => {
    onControls(controls.current);
  }, [onControls]);

  return (
    <>
      <ambientLight intensity={0.7} />
      <spotLight position={[5, 7, 5]} angle={0.35} penumbra={1} intensity={140} castShadow />
      <spotLight position={[-5, 3, -4]} angle={0.5} penumbra={1} intensity={40} color="#ffd9b8" />
      <directionalLight position={[0, 4, -6]} intensity={1.2} />

      <Suspense fallback={null}>
        <FittedModel src={src} />
        <Environment preset="city" />
      </Suspense>

      <OrbitControls
        ref={controls}
        makeDefault
        enablePan={false}
        enableZoom
        autoRotate={rotate}
        autoRotateSpeed={2.2}
        minDistance={1.4}
        maxDistance={12}
      />
    </>
  );
}

/**
 * Interactive 360° 3D menu viewer.
 * Loads a `.glb` with React Three Fiber, adds studio lighting + OrbitControls
 * (drag to rotate, pinch/scroll to zoom, auto-rotation toggle) and wraps the
 * canvas in a framer-motion container so it can transition between dishes,
 * modals, or drawer previews.
 */
export default function MenuViewer3D({
  src,
  name,
  autoRotate = true,
  height = 400,
  className = "",
}: MenuViewer3DProps) {
  const [rotate, setRotate] = useState(autoRotate);
  const [controls, setControls] = useState<OrbitControlsImpl | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
  }, [src]);

  function resetView() {
    controls?.reset();
  }

  const loading = progress < 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      role="img"
      aria-label={name ? `${name} 3D model` : "3D model"}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      style={{
        height,
        touchAction: "none",
        background: "radial-gradient(circle at 30% 20%, #3a3642 0%, #16151b 70%)",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <Canvas
            camera={{ position: [0, 0.8, 3.6], fov: 42, near: 0.1, far: 100 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            style={{ touchAction: "none", background: "transparent" }}
          >
            <Rig src={src} rotate={rotate} onControls={setControls} />
            <LoadingBridge onProgress={setProgress} />
          </Canvas>
        </motion.div>
      </AnimatePresence>

      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#16151b]/70 backdrop-blur-[2px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-10 w-10 rounded-full border-2 border-[#FF6B00]/25 border-t-[#FF6B00]"
            />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Loading 3D model…
            </span>
          </motion.div>
        </div>
      )}

      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <button
          onClick={() => setRotate((r) => !r)}
          title="Toggle auto-rotation"
          aria-pressed={rotate}
          className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-semibold shadow-md backdrop-blur-md transition-colors ${
            rotate
              ? "bg-[#FF6B00] text-white"
              : "bg-white/80 text-slate-600 hover:bg-white"
          }`}
        >
          <Rotate3d size={13} />
          Auto
        </button>
        <button
          onClick={resetView}
          title="Reset camera"
          className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-md backdrop-blur-md transition-colors hover:bg-white"
        >
          <RotateCcw size={13} />
          Reset
        </button>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm backdrop-blur-md">
        Drag • Zoom • 360°
      </span>
    </motion.div>
  );
}