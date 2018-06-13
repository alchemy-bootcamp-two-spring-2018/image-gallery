<template>
 <div>
   <h2>Welcome! Your collection contains {{ genres.length }} different genres!</h2>

 </div>
</template>

<script>
import {
  getStats
} from '../services/api.js';

export default {
  data() {
    return {
      stats: ''
    };
  },
  created() {
    getStats()
      .then(stats => {
        this.stats = stats;
      });
  },

  props:['genres']

};
</script>

<style>

h2 {
  font-family: 'Knewave', cursive;
}

#homebg {
  background: linear-gradient(212deg, #d4625f, #e99a57);
  background-size: 1000% 1000%;

  -webkit-animation: AnimationName 6s ease infinite;
  -moz-animation: AnimationName 6s ease infinite;
  animation: AnimationName 6s ease infinite;
}
  @-webkit-keyframes AnimationName {
      0%{background-position:25% 0%}
      50%{background-position:76% 100%}
      100%{background-position:25% 0%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:25% 0%}
      50%{background-position:76% 100%}
      100%{background-position:25% 0%}
  }
  @keyframes AnimationName { 
      0%{background-position:25% 0%}
      50%{background-position:76% 100%}
      100%{background-position:25% 0%}
  }

</style>
