import * as firebase from "firebase";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword("pedromartins.uni@gmail.com", "123456")
//         .then((user) => {
//           setIsAuthenticated(true);
//         })
//         .catch((e) => console.log(e));
//     }, 2000);
//   }, []);
