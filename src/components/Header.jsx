import React, { useState, useEffect, useRef } from 'react';

const gcsBaseUrl = "https://storage.googleapis.com/hoods-bucket";

// (Option 1) Set initial state immediately.
const Header = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 790);
    const [showOpening, setShowOpening] = useState(true);
    const [introEnded, setIntroEnded] = useState(false);
    const introVideoRef = useRef(null);

    // (Optionally) add a resize listener if you want responsiveness after mount.
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 790);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setShowOpening(false), isMobile ? 4200 : 4200);
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
                        src={isMobile ? `${gcsBaseUrl}/rogue_index_mobile_two.mp4` : `${gcsBaseUrl}/rogue_index.mp4`} 
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
                        // Always loop the desktop long video.
                        src={isMobile ? `${gcsBaseUrl}/rogue_index_mobile_two.mp4` : `${gcsBaseUrl}/rogue_index_long.mp4`} 
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
                                ? `${gcsBaseUrl}/opening_mobile.mp4` 
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