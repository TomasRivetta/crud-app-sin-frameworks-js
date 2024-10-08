import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url);
  const data = await res.json();

  //MI FORMA
  // let users = [];

  // for (const use of data.data) {
  //   users.push(localhostUserToModel(use));
  // }
  //----------

  //FORMA DEL PROFE
  const users = data.map((userLike) => localhostUserToModel(userLike));

  //console.log(users); // [User,User ,x8]
  return users;
};
