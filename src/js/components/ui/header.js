const header = (
  elementType = "h1",
  title = "Austin's Basic To-Do List",
  className = "ui-header"
) => {
  const element = `<${elementType} class="${className}">${title}</${elementType}>`;

  return element;
};

export default header;
