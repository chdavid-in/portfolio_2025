import { useRef, useEffect } from "react";

interface SquaresProps {
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  className?: string;
}

export function Squares({
  speed = 0.5,
  borderColor = "hsl(var(--square-border))",
  squareSize = 40,
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const gridOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const parseColor = (cssVar: string) => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(
        cssVar
      );
      return value ? `hsl(${value.trim()})` : "#999";
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const stroke = parseColor("--square-border");

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = stroke;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);
          ctx.strokeRect(squareX, squareY, squareSize, squareSize);
        }
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);

      // Diagonal (top-right to bottom-left)
      gridOffset.current.x =
        (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
      gridOffset.current.y =
        (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed, borderColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full fixed inset-0 -z-10 pointer-events-none ${className}`}
    />
  );
}
