<template>
<div class="card-stack">
<Card v-for="diffCard in getSavedCards"
      :key="diffCard.id"
      :card="diffCard"
      v-on:click="$emit('showCard', diffCard)">

</Card>

</div>
</template>

<script>

import Card from "@/components/Card";

export default {
  name: "CardStack",
  components: {
    Card
  },
  computed: {
    getSavedCards(){
      return this.$root.savedCards

    }
  }
}
</script>

<style scoped>

.card-stack {
  margin: 2rem 0 12rem;
  display: grid;
  grid-auto-rows: 4rem
}
</style>