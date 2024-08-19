import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (users.length === 0) {
    return;
  }

  state.currentPage += 1;
  state.users = users;
};

//TODO: TAREA HACER ANTES QUE LO OTRO
const loadPreviusPage = async () => {
  throw new Error("No implementado");
};

//TODO: implementar
const onUserChanged = () => {
  throw new Error("No implementado");
};

//TODO: implementar
const reloadPage = async () => {
  throw new Error("No implementado");
};

export default {
  loadNextPage,
  loadPreviusPage,
  onUserChanged,
  reloadPage,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users], //PASO UN OBJETO
  getCurrentPage: () => state.currentPage, // PASO UN PRIMITIVO
};
