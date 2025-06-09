import React, { useState, useEffect, useRef } from 'react';

const gcsBaseUrl = "https://storage.googleapis.com/hoods-bucket";

const Header = () => {
    const [showOpening, setShowOpening] = useState(true);
    const [introEnded, setIntroEnded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const introVideoRef = useRef(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowOpening(false);
        }, isMobile ? 5000 : 4300); // Adjust duration if needed
        return () => clearTimeout(timer);
    }, [isMobile]);

    return (
        <header style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            {!introEnded && (
                <video
                    ref={introVideoRef}
                    preload="auto"
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
                    <source 
                        src={isMobile ? `${gcsBaseUrl}/rogue_index_mobile.mp4` : `${gcsBaseUrl}/rogue_index.mp4`} 
                        type="video/mp4" 
                    />
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
                    <source 
                        src={isMobile ? `${gcsBaseUrl}/rogue_index_long_mobile.mp4` : `${gcsBaseUrl}/rogue_index_long.mp4`} 
                        type="video/mp4" 
                    />
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
                        src={
                            isMobile 
                                ? `${gcsBaseUrl}/opening_mobile.gif` 
                                : `${process.env.PUBLIC_URL}/opening.gif`
                        }
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
                    style={{ color: 'transparent' }}
                />
            </a>
        </header>
    );
};

export default Header;