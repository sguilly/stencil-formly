export async function loadModel() {
  let json = localStorage.getItem("model");
  return json ? JSON.parse(json) : {};
}
