import { StarsBackground } from "./animations/stars_background";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      <StarsBackground starColor="#fff" speed={40}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold">✨ Bienvenido al Espacio</h1>
          <p className="mt-4 text-lg opacity-80">
            Explora el universo con nosotros
          </p>
        </div>
      </StarsBackground>
    </div>
  );
}
