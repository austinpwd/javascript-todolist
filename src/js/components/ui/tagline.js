const tagline = function (
  tagline = "Always improving!",
  className = "container__headings--tagline"
) {
  const element = `<span class="${className}">${tagline}</span>`;
  return element;
};

export default tagline;
