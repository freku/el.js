# el.js
### Example
```javascript
  let div = el("div", {
    className: "wrapper",
    id: "SomeId",
    style: "color: white; margin: 20px",
    children: [
      el('div', {
        id: "cool",
        children: [
          el("span", {
            innerText: "some span",
            style: "color: red",
          })
        ]
      }),
      el("p", { innerText: "some text here" }),
      el("p", { innerText: "more messa" }),
      el("p", { innerText: "title here" }),
    ],
  });```