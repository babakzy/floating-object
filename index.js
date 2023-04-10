export function floating(containerId, targetId, coefficient) {

  const conatinerElement = document.getElementById(containerId);
  const targetElement = document.getElementById(targetId)
  conatinerElement.addEventListener("mousemove", (event) => { makeFloating(event, conatinerElement, targetElement, coefficient) });

}

function makeFloating(event, conatinerElement, targetElement, coefficient) {

  const containerHeight = conatinerElement.clientHeight ;
  const containerWidth = conatinerElement.clientWidth ;
  targetElement.style.marginTop = -((event.offsetY) / containerHeight * coefficient) + 'px';
  targetElement.style.marginLeft = -((event.offsetX) / containerWidth * coefficient) + 'px';

}
