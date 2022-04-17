import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const useFirebase = () => {
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyA8WyZkaUlZ0WsNKv0UDG_v11Ro2uORzaY",
        authDomain: "believer-guide.firebaseapp.com",
        projectId: "believer-guide",
        storageBucket: "believer-guide.appspot.com",
        messagingSenderId: "807834120045",
        appId: "1:807834120045:web:97439e01aabf4e79f93464"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);

    return auth;
}

export default useFirebase;
