const VideoBackground = () => {
  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="
      max-sm:!left-[50%]
      video-background "
    >
      <source src="/images/1.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
