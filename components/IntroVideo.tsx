import styles from "styles/IntroVideo.module.scss";
import Image from "next/image";
function IntroVideo() {
  return (
    <div className={styles.container}>
      <h2>Intro Video</h2>
      <p className={styles.para}>
        <span>
          Below video explains projects I have done. Note: You can check
          comments{" "}
        </span>
        <CommentIcon />
        <span> for timestamp for specific projects</span>
      </p>
      <div>
        <div
          style={{
            maxWidth: "800px",
            margin: "auto",
          }}
          dangerouslySetInnerHTML={{
            __html: `<div style="position: relative; padding-bottom: 64.98194945848375%; height: 0;">
      <iframe
        src="https://www.loom.com/embed/0eda37730a25422fb6975e942116f9df"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>`,
          }}
        ></div>
      </div>
    </div>
  );
}
export default IntroVideo;
const CommentIcon = () => {
  return (
    <svg
      viewBox="3 0 18 24"
      width={20}
      height={20}
      style={{
        marginRight: 5,
        marginLeft: 2,
        transform: "translateY(2px)",
      }}
      fill="none"
    >
      <path
        d="M5.778 6A.778.778 0 005 6.778v11.808l1.848-1.849a1 1 0 01.708-.293h10.666a.778.778 0 00.778-.777v-8.89A.778.778 0 0018.222 6H5.778zM3.814 4.814A2.778 2.778 0 015.778 4h12.444A2.778 2.778 0 0121 6.778v8.889a2.778 2.778 0 01-2.778 2.777H7.97l-3.263 3.263A1 1 0 013 21V6.778c0-.737.293-1.443.814-1.964z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
