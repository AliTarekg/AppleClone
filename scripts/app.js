document.addEventListener("DOMContentLoaded", function () {
  var controller = new ScrollMagic.Controller();

  var scenePin = new ScrollMagic.Scene({
    triggerElement: "#animationtrigger",
    triggerHook: 0,
    duration: "150%",
  })
    .setPin(".rowy")
    .addTo(controller);

  gsap.to(".secAnimation", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".secAnimation",
      start: "top 80%",
      end: "bottom center",
      scrub: true,
    },
    onComplete: function () {
      gsap.to(".firstAnimation", {
        opacity: 1,
        scrollTrigger: {
          trigger: ".firstAnimation",
          start: "top 10%",
          end: "bottom center",
          scrub: true,
        },
        onComplete: function () {
          var fadeInThird = gsap.to(".thirdAnimation", {
            opacity: 1,
            scrollTrigger: {
              trigger: ".thirdAnimation",
              start: "top 70%",
              end: "bottom center",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          });
          var fadeInThird = gsap.to(".thirdAnimation", {
            opacity: 1,
            scrollTrigger: {
              trigger: ".thirdAnimation",
              start: "top 60%",
              end: "bottom center",
              scrub: true,
              toggleActions: "play none none reverse",
            },
          });
        },
      });
    },
  });
});
