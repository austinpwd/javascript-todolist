const tagline = function (
  tagline = "To Do List 2.0 - New and Improved!",
  className = "container__headings--tagline"
) {
  const element = `<span class="${className}">${tagline}</span>`;
  return element;
};

export default tagline;
