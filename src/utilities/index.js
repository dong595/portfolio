function render(content, target) {
  target.innerHTML = content();
}
export { render };
function useState(initialState) {
  let state = initialState;
  function getState() {
    return state;
  }
  function setState(newState) {
    state = newState;
  }
  return [getState, useState];
}
const [getState, useState] = useState("app");
console.log(getState());
