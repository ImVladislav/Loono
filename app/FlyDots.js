'use client';
import { useRef, useEffect } from 'react';

export default function FlyingDots() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let dots = [];
        
        const initializeDots = () => {
            dots = [];
            for (let i = 0; i < 300; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    px: 0,
                    py: 0
                });
            }
        };

        const updateDots = () => {
            dots.forEach(dot => {
                dot.z -= 0.05;
                if (dot.z <= 0) dot.z = canvas.width;
            });
        };

        const drawDots = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            dots.forEach(dot => {
                const sx = (dot.x - canvas.width / 2) * (canvas.width / dot.z);
                const sy = (dot.y - canvas.height / 2) * (canvas.width / dot.z);
                const size = (2 * (canvas.width - dot.z)) / canvas.width;
                dot.px = sx + canvas.width / 2;
                dot.py = sy + canvas.height / 2;
                ctx.fillStyle = `rgba(74, 255, 145, ${1 - dot.z / canvas.width})`;
                ctx.fillRect(dot.px, dot.py, size, size);
            });
        };

        const animate = () => {
            updateDots();
            drawDots();
            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initializeDots();
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className='fixed inset-0 w-full h-full' style={{ zIndex: -1 }} />;
}
