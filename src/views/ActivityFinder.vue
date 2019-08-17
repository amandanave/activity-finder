<template>
  <div class="activityfinder">
    <h2>Bored? Here's a Random Activity!</h2>
    <div v-if="results">
      <p>Activity: {{ results.activity }}</p>
      <p>Type: {{ results.type }}</p>
      <p>Participants: {{ results.participants }}</p>
    </div>
    <activity-type></activity-type>

    <!-- <ul class="results" v-if="results && results.length > 0">
      <li class="item" v-for="(item,index) of results" :key="index">
        <p><strong> {{item.word}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul> -->

     <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
// Imported axios
import axios from 'axios';
import ActivityType from '@/components/ActivityType'

export default {
  name: 'ActivityFinder',
  components: {
    'activity-type': ActivityType
  },

  data () {
    return {
      results: null,
      errors: [],
    }
  },

  created() {
    axios.get('https://www.boredapi.com/api/activity', {
      })
      .then(response =>{
        this.results = response.data
        console.log(this.results)
      })
      .catch(error =>{
        this.errors.push(error)
      })
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
