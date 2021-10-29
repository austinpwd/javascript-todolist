const tagline = function (
  tagline = "It's very simple — you read the protocol and write the code.",
  className = "ui-tagline"
) {
  const element = `<h2 class="${className}"><em>"${tagline}"</em></h2>`;
  return element;
};

export default tagline;
