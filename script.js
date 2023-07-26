// // JavaScript code to handle the scroll event and apply rotation
// window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;
//     const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//     const rotationMultiplier = 2; // Adjust this multiplier to make the animation finish faster

//     const rotation = 90 * rotationMultiplier * (scrollPosition / maxScroll); // Calculate the rotation based on scroll position

//     const floatingText = document.querySelector(".floating-text");
//     const circleRadius = 50; // The radius of the circle, adjust this value based on the circle size

//     // Calculate the horizontal and vertical offsets for the text based on the scroll position
//     const offsetX = (scrollPosition / maxScroll) * circleRadius * 2; // Adjust this multiplier to control horizontal shift
//     const offsetY = (scrollPosition / maxScroll) * circleRadius * 4; // Adjust this multiplier to control vertical shift

//     // Calculate the new top and right positions of the text
//     const topPosition = 10 + offsetY; // Adjust this value to set the initial top position
//     const rightPosition = 10 + offsetX; // Adjust this value to set the initial right position

//     floatingText.style.transform = `translate(calc(50% + ${rightPosition}px), ${topPosition}px) rotate(${rotation}deg)`;
// });
