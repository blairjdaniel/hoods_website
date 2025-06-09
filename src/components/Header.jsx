import React, { useState, useEffect, useRef } from 'react';


const Header = () => {
    const [showOpening, setShowOpening] = useState(true);
    const [introEnded, setIntroEnded] = useState(false);
    const introVideoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOpening(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {!introEnded && (
                <video
                    ref={introVideoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => setIntroEnded(true)}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                    }}
                >
                    <source src={`${process.env.PUBLIC_URL}/videos/rogue_index.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {introEnded && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                    }}
                >
                    <source src={`${process.env.PUBLIC_URL}/videos/rogue_index_long.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            {showOpening && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black',
                        zIndex: 1,
                    }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/opening.gif`}
                        alt="Opening Animation"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}
            
            <a
                href="Burr0wb0rn.html"
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '40px',
                    zIndex: 0,
                }}
            >
                <img
                    src={`${process.env.PUBLIC_URL}/gifRogues.gif`}
                    alt="Rogues Logo Animation"
                    width="74"
                    height="74"
                    loading="eager"
                    decoding="async"
                    // Removed extra classes that might affect layout
                    style={{ color: 'transparent' }}
                />
            </a>
        </header>
    );
};

export default Header;