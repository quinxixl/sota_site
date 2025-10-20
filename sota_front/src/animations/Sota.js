import { useRef, useEffect } from 'react';

const Sota = ({
                  borderColor = '#999',
                  hexSize = 40,
                  hoverFillColor = '#222',
                  gapX = 4,
                  gapY = 4,
                  className = ''
              }) => {
    const canvasRef = useRef(null);
    const hoveredHex = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            drawGrid();
        };

        const drawHex = (x, y, size, strokeColor, fillColor = null) => {
            const angleStep = Math.PI / 3;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = angleStep * i + Math.PI / 6;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();

            if (fillColor) {
                ctx.fillStyle = fillColor;
                ctx.fill();
            }

            ctx.strokeStyle = strokeColor;
            ctx.stroke();
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const hexH = Math.sqrt(3) * hexSize;
            const horizDist = 1.5 * hexSize + gapX * Math.sqrt(3);
            const vertDist = hexH * 0.5 + gapY;

            for (let row = 0; row < canvas.height / vertDist; row++) {
                for (let col = 0; col < canvas.width / horizDist; col++) {
                    const x = col * horizDist + ((row % 2) * horizDist) / 2 + gapX;
                    const y = row * vertDist + gapY;

                    const isHovered =
                        hoveredHex.current &&
                        hoveredHex.current.col === col &&
                        hoveredHex.current.row === row;

                    drawHex(x, y, hexSize, borderColor, isHovered ? hoverFillColor : null);
                }
            }
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const hexH = Math.sqrt(3) * hexSize;
            const horizDist = 1.5 * hexSize + gapX * Math.sqrt(3);
            const vertDist = hexH * 0.5 + gapY;

            const col = Math.floor(mouseX / horizDist);
            const row = Math.floor(mouseY / vertDist);

            hoveredHex.current = { col, row };
            drawGrid();
        };

        const handleMouseLeave = () => {
            hoveredHex.current = null;
            drawGrid();
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', resizeCanvas);

        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [borderColor, hoverFillColor, hexSize, gapX, gapY]); // добавлены gapX и gapY в зависимости

    return <canvas ref={canvasRef} className={`sota-canvas ${className}`}></canvas>;
};

export default Sota;