export async function saveModel(model) {
  localStorage.setItem("model", JSON.stringify(model));
}
