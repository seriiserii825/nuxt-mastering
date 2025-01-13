export default defineNuxtRouteMiddleware((to, from) => {
  const naviation_history = useLocalStorage("history", []);
  const to_path = to.path;
  naviation_history.value.push(to_path);
})
