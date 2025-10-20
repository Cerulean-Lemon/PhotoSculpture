const imageSequence = [
  "images/image01.png",
  "images/image02.png",
  "images/image03.png",
  "images/image04.png",
  "images/image05.png",
];

const clipPaths = [
  "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  "polygon(20% 10%, 100% 50%, 0% 100%, 100% 0%)",
  "polygon(20% 10%, 40% 0%, 40% 100%, 100% 0%)",
  "polygon(50% 0%, 40% 50%, 50% 100%, 0% 50%)",
  "polygon(20% 10%, 100% 50%, 50% 100%, 50% 0%)",
  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
];

const stage = document.querySelector("#stage");
const imgElement = document.querySelector("#stage img");

const timeline = gsap.timeline();

clipPaths.forEach((path, index) => {
  // 폴리곤 애니메이션
  timeline.to(stage, {
    clipPath: path,
    duration: 1.4,
    ease: "power2.inOut",
  });

  // 폴리곤이 완전히 변환된 직후 사진 변경
  if (index < clipPaths.length - 2) {
    timeline.call(() => {
      imgElement.src = imageSequence[index + 1];
    });
  }
});
