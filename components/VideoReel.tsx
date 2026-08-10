'use client';

import { useState, useRef, useEffect } from 'react';

export default function VideoReel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay when component mounts
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Browser prevented autoplay with sound or autoplay blocked
          setIsPlaying(false);
        });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="video-reel-card">
      <div className="video-reel-inner" onClick={togglePlay}>
        <video
          ref={videoRef}
          src="/Pure Surface Solutions Reel.mp4"
          playsInline
          autoPlay
          muted={isMuted}
          loop
          onLoadedData={() => setHasLoaded(true)}
          className="video-reel-element"
        />

        {/* Loading overlay if video buffering */}
        {!hasLoaded && (
          <div className="video-reel-loading">
            <div className="spinner" />
          </div>
        )}

        {/* Top Header Glass Overlay */}
        <div className="video-reel-top-bar">
          <button
            type="button"
            className="video-reel-icon-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Click to Unmute' : 'Click to Mute'}
          >
            {isMuted ? (
              /* Muted Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              /* Sound On Icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>
        </div>

        {/* Center Play/Pause indicator overlay on hover / paused */}
        {!isPlaying && (
          <div className="video-reel-center-play">
            <div className="play-button-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom Footer Glass Overlay */}
        <div className="video-reel-bottom-bar">
          <div className="video-reel-info">
            <strong>Pure Surface Solutions</strong>
            <small>Premium Tiles &amp; Slabs Showcase</small>
          </div>
          <div className="video-reel-controls">
            <button
              type="button"
              className="video-reel-play-btn"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
