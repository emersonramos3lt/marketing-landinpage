"use client";

import React, { useEffect, useRef} from 'react';

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if(!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        const speed = 1;

        function animate() {
            const distX = mouseX - ballX;
            const distY = mouseY - ballY;

            ballX += distX * speed;
            ballY += distY * speed;

            if (cursor) {
                cursor.style.left = `${ballX}px`;
                cursor.style.top = `${ballY}px`;
            }

            requestAnimationFrame(animate);
        }

        animate();

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        };

        const onClick = () => {
            if (cursor) {
                cursor.classList.remove('active');
                void cursor.offsetWidth;
                cursor.classList.add('active');
           
           
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('click', onClick);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('click', onClick);
        }
    }, []);

    return (
        <div 
            ref={cursorRef}
            id='cursor'
            className='border border-blue-600 rounded-full bg-blue-600 w-[24px] h-[24px] absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none transition-all duration-500 ease-out z-50 hidden lg:block'
        />
    )
}

export default Cursor;