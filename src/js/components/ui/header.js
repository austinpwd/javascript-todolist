const header = (
  elementType = "h1",
  title = "To-Do 2.0",
  className = "ui-header"
) => {
  const element = `<${elementType} class="${className}">${title}</${elementType}>`;

  return element;
};

export default header;
