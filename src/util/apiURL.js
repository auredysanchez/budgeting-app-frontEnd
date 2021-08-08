export const apiURL = () => {
    if (
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "test"
    ) {
      return "http://localhost:3001";
    } else {
      return "https://polar-bayou-09506.herokuapp.com";
    }
  };