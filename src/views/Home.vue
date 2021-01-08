<template>
  <div>
    <Top
        :title="title"
        :subTitle="subTitle"/>
    <Card v-if="theCard" :card="theCard"></Card>
    <CardStack @showCard="showCard"/>
    <router-link class="cta" to="/AddCard">add a new card</router-link>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import CardStack from "@/components/CardStack";
import Card from "@/components/Card";

export default {
  name: 'Home',
  components: {
    Card,
    CardStack,
    Top,
  },
  data() {
    return {
      title: 'E-WALLET',
      subTitle: 'ACTIVE CARD',
      theCard: null
    }
  },
  methods: {
    showCard(newCard){
      this.theCard= {
        cardNumber: newCard.cardNumber,
        name: newCard.name,
        expireMonth: newCard.expireMonth,
        expireYear: newCard.expireYear,
        currentYear: newCard.currentYear,
        vendor: newCard.vendor,
        id: newCard.id,
      }
    }
  }
}
</script>

<style scoped>

a.cta {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 4rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  border: .125rem solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: .5rem;
  margin: 2rem 0
}

a.cta:hover {
  background: #000;
  color: #ddd
}

a.cta:active {
  background: #000;
  color: #fff
}
</style>