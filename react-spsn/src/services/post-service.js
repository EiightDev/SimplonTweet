// const axios = require("axios");

export default class ApiPostService {
  static isDev =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development";

  static getAllPost() {
    if (this.isDev) {
      return fetch("http://localhost:4000/post")
      .then((response) =>  response.json())
      .catch((error) => this.handleError(error))
    }
    // else {
    //   return axios
    //     .get("http://localhost:3333/post/getAll")
    //     .then((response) => response.json())
    //     .catch((error) => this.handleError(error));
    // }
  }

  static handleError(error) {
    console.error(error);
  }
}
