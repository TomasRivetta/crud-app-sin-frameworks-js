import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
};

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

  getUser: () => [...state.users], //PASO UN OBJETO
  getCurrentPage: () => state.currentPage, // PASO UN PRIMITIVO
};
