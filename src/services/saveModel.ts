export async function saveModel(model: any) {
  localStorage.setItem("model", JSON.stringify(model));
}
