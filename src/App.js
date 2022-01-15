import { Admin, Resource } from "react-admin";
import firebaseDataProvider from "ra-data-firebase-client";
import { emailAndPasswordAuthProvider } from "ra-auth-firebase-client";
import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import { PlaylistAddCheckOutlined } from "@material-ui/icons";
import { CreateOrEditList, ShowList, ListsOfItems } from "./pages/Lists";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const settings = { context: "dev", imagekey: "images", filekey: "files" };

const App = () => (
  <Admin
    dataProvider={firebaseDataProvider(firebase, settings)}
    authProvider={emailAndPasswordAuthProvider(firebase)}
  >
    <Resource
      name="lists"
      list={ListsOfItems}
      edit={CreateOrEditList}
      create={CreateOrEditList}
      show={ShowList}
      icon={PlaylistAddCheckOutlined}
      options={{
        label: "Listas",
      }}
    />
  </Admin>
);

export default App;
