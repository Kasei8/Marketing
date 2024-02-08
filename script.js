const storyTitle = document.querySelector('.story-title');

anime({
  targets: storyTitle,
  translateY: [0, -10, 0],
  duration: 2000,
  easing: 'easeOutElastic',
  loop: true,
});
