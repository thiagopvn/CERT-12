// firebase-config.js

// 🔥 Configuração do Firebase - 12º GBM Jacarepaguá
var firebaseConfig = {
  apiKey: "AIzaSyD-XjshoFR1I5d5SMDOtX81TdgR5hCoA_o",
  authDomain: "certidao-12gbm.firebaseapp.com",
  databaseURL: "https://certidao-12gbm-default-rtdb.firebaseio.com",
  projectId: "certidao-12gbm",
  storageBucket: "certidao-12gbm.firebasestorage.app",
  messagingSenderId: "716299360072",
  appId: "1:716299360072:web:d33662d80858d90536057d",
  measurementId: "G-CK2VGL8S5X",
};

// ✅ Inicializa Firebase apenas uma vez
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("🔥 Firebase inicializado via firebase-config.js");
} else {
  console.log("⚠️ Firebase já estava inicializado");
}

// ✅ Exporta para uso global nos outros scripts
window.db = firebase.database();
window.storage = firebase.storage();
window.functions = firebase.functions();
