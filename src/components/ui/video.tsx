export function Video() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }