<template>
  <div class="activitytype">
    <i class="fas fa-hiking fa-3x"></i>
      <h2>Choose Your Activity Type Below:</h2>
      <form v-on:submit.prevent="activityForm">
          <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Education</option>
              <option>Recreational</option>
              <option>Social</option>
              <option>DIY</option>
              <option>Charity</option>
              <option>Cooking</option>
              <option>Relaxation</option>
              <option>Music</option>
              <option>Busywork</option>
          </select>
          <button type="submit">Pick Something!</button>
      </form>
      <div v-if="results">
      <p>{{ results.activity }}</p>
    </div>
  </div>
</template>

<script>
// Imported axios
import axios from 'axios';

export default {
  name: 'ActivityType',
  data () {
    return {
      results: null,
      errors: [],
      selected: "",
    }
  },

  methods: {
      activityForm: function(){
      axios.get('https://www.boredapi.com/api/activity', {
        params: {
          selected: this.type,
        }
      })
      .then(response =>{
        this.results = response.data
      })
      .catch(error =>{
        this.errors.push(error)
      })
    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activityfinder {
  font-size: 1.4rem;
}

h1, h2 {
  font-weight: normal;
}

ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

</style>
