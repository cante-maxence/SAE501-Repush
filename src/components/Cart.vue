<template>
  <div>
    <h1 class="m-5">Panier</h1>
    <div v-if="cart" class="border m-5 p-3 flex flex-col gap-3">
      <p>Nb montre panier : {{ cart.montreCount }}</p>
      <ul>
        <li class="border p-3" v-for="watchItem in watch" :key="watchItem.montreID">
          <p>Id montre : {{ watchItem.montreID }}</p>
          <p>Forme boitier : {{ watchItem.boitier_nom }}</p>
          <p>Texture boitier : {{ watchItem.boitier_texture }}</p>
          <p>Ornement pierres : {{ watchItem.pierre_nom }}</p>
          <p>Texture du bracelet : {{ watchItem.bracelet_texture }}</p>
          <button @click="deleteFromCart(watchItem.montreID)">delete panier</button>
          <button @click="modifyCartItem(watchItem)">modifier</button>
        </li>
      </ul>
    </div>
    <div v-else>
      attente
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      cart: null,
      watch: null
    };
  },
  mounted() {
    // Use Promise.all to make multiple axios.get requests concurrently
    Promise.all([
      axios.get(`http://localhost:3000/panier/${this.id}`),
      // Add more axios.get requests here if needed
    ])
      .then(responses => {
        // Extract data from each response
        this.cart = responses[0].data;
        this.watch = responses[0].data.montreData
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
      });
  },
  methods: {
    deleteFromCart(montreID) {
      const userID = this.id;

      axios
        .delete(`http://localhost:3000/panier/${userID}/delete`, { data: { montreID } })
        .then((response) => {
          console.log(response.data.message);
          // Assuming you want to update the view after deleting
          this.watch = this.watch.filter(item => item.montreID !== montreID);
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression de la montre du panier", error.response.data.error);
          alert("Erreur lors de la suppression de la montre du panier. Veuillez réessayer.");
        });
    },
    modifyCartItem(watchItem) {
      // Use the router to navigate to the modification page with the dynamic watchID
      this.$router.push({ name: 'modify', params: { watchID: watchItem.montreID } });
    },
  },
};
</script>
