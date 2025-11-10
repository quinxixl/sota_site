import { useRef, useEffect, useState } from 'react';

const Sota = ({
                  borderColor = '#333',
                  hexSize = 40,
                  hoverFillColor = '#FF7514',
                  gapX = 4,
                  gapY = 4,
                  className = ''
              }) => {
    const canvasRef = useRef(null);
    const hoveredHex = useRef(null);
    const [activatedHexes, setActivatedHexes] = useState(new Set());

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.scale(dpr, dpr);
            drawGrid();
        };

        const drawHex = (x, y, size, strokeColor = null, fillColor = null) => {
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

            if (strokeColor) {
                ctx.strokeStyle = strokeColor;
                ctx.stroke();
            }
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

                    const isHovered = hoveredHex.current?.col === col && hoveredHex.current?.row === row;
                    const isActivated = activatedHexes.has(`${col},${row}`);

                    let fillColor = null;
                    let strokeColor = null;

                    if (isHovered) {
                        fillColor = hoverFillColor;
                    } else if (isActivated) {
                        strokeColor = borderColor;
                    }

                    drawHex(x, y, hexSize, strokeColor, fillColor);
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

            const hexKey = `${col},${row}`;
            if (!activatedHexes.has(hexKey)) {
                setActivatedHexes(prev => new Set([...prev, hexKey]));
            }

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
    }, [borderColor, hoverFillColor, hexSize, gapX, gapY, activatedHexes]);

    return <canvas ref={canvasRef} className={`sota-canvas ${className}`}></canvas>;
};

export default Sota;