import { Dialog } from "@reach/dialog";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

interface LoginModalProps {
  show: boolean;
  onClose: () => void;
}

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => console.log("success"),
  },
};

export const LoginModal = (props: LoginModalProps) => {
  return (
    <Dialog isOpen={props.show} onDismiss={props.onClose} aria-label={"login"}>
      <button className="close-button" onClick={props.onClose}>
        <div style={{ visibility: "hidden" }}>Close</div>
        <span aria-hidden>×</span>
      </button>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Dialog>
  );
};
