var el = (function () {
  return function (type, options) {
    let element = document.createElement(type);

    for (let prop in options) {
      if (prop === "children") {
        if (options[prop].constructor !== Array) {
          throw 'children property should be an instance of Array';
        }
        options[prop].forEach((el, i) => {
          element.appendChild(el);
        });
      } else {
        element[prop] = options[prop];
      }
    }

    return element;
  };
})();