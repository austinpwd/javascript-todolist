const header = (
  elementType = "h1",
  className = "container__headings",
  title = ""
) => {
  const element = `<${elementType} class="${className}">${title}</${elementType}>`;

  return element;
};

export default header;
