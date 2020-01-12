import firebase from 'firebase'
import {firebaseConfig} from './config'

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth()

export { db, auth, app }