// Script di base per il progetto


const app = Vue.createApp({
  data() {
    return {
      message: 'Benvenuto nel mio Progetto Web con Vue.js!',
      imageSrc: 'https://media.istockphoto.com/id/1482199015/it/foto/felice-cucciolo-welsh-corgi-14-settimane-cane-ammiccante-ansimante-e-seduto-isolato-su-bianco.jpg?s=612x612&w=0&k=20&c=oveIBmaFDoOHa84pH4odLQaAs0-C7hXckvWanqFXqYs=' // Sostituisci con l'URL della tua immagine
    };
  }
});

app.mount('#app');
