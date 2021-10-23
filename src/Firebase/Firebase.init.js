import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const EmajhonAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default EmajhonAuthentication;