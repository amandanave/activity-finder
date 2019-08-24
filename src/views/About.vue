<template>
  <div class="About">
    <!-- <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon"> -->
      <p><router-link to="/">Activity Finder Home</router-link></p>
    <h3>About This Application</h3>
    <p>Hi! My name is Amanda, this is my capstone project for the Web Development Program at Seattle University. This web app was built using Vue.js and the <a href="https://www.boredapi.com/" target="_blank">Bored API</a>.</p>
        <!-- <div>
            <img :src="image" :alt="item.name">
        </div> -->
  </div>
</template>

<script>
// Imported axios
// import axios from 'axios';

// export default {
//   name: 'Pokeimage',
//   data () {
//     return {
//       results: null,
//       errors: [],
//       item: null,
//       image: ""
//     }
//     },
//     created: function () {
//         this.item = this.$route.params.item;
//         console.log(this.item)
//         axios.get(this.item.url, {
//         params: {
//           limit: 151
//         }
//       })
//       .then(response =>{
//         this.results = response.data
//         this.image = this.results.sprites.front_default
//       })
//       .catch(error =>{
//         this.errors.push(error)
//       })
//     }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 p {
   text-align: center;
   padding: 0px 200px;
 }

</style>
