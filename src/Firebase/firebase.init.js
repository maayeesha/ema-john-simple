import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* Steps for authenticaction:
-----------------------------
Step 1: Initial setup
1.  firebase: create project
2.  create web app
3.  get configuration
4.  initialize firebase
5.  enable auth method

-----------------

Step: 2
1.  Create Login Component
2.  Create Register Component
3.  Create Route for Login & Register

--------------------

Step 3: Set Auth system
1.   Set up sign in method
2.   Set up sign out method
3.   User State
4.   Speacial Observer
5.  Return necessary methods and states from useFirebase

-----------------------
Step 4: Create Auth context (useAuth)
1.  Create an auth context
2.  Create context Povider 
3.  Set context provider Context value
4.  use Auth Provider
5.  Create useAuth Hook

-------------------------
Step 5: create Private route 
1.  Create private route
2.  Set private route

Step 6: Redirect after Login
1. Redirec user to their desired destination after login

*/
