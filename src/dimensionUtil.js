const SYSTEM = document.getElementById('_system');
const svgNS = "http://www.w3.org/2000/svg";

export const getTextSize = function(textContent, attributes){
  let dimensions;
  var txtNode = document.createTextNode(textContent);
  var text = document.createElementNS(svgNS,"text");

  text.setAttributeNS(null,"fill","black");
  text.appendChild(txtNode);
  SYSTEM.appendChild(text);
  dimensions = text.getBBox();
  SYSTEM.removeChild(text);

  return dimensions
};
