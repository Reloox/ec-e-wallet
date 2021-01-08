<template>
  <div>
    <Top
      :title="title"
      :subTitle="subTitle"/>
    <Card :card="infoCard"/>
    <CardForm @sendInfoCard="giveValue"></CardForm>
    <a v-on:click="giveCard" class="cta">add card</a>
  </div>
</template>

<script>
import CardForm from '@/components/CardForm.vue'
import Top from '@/components/Top.vue'
import Card from "@/components/Card";


export default {
  name: 'AddCard',
  components: {
    Top,
    CardForm,
    Card
  },
  data() {
    return {
      title: 'ADD A NEW CARD',
      subTitle: 'NEW CARD',
      infoCard: {},
    }
  },
  methods: {
    giveValue(newCard){
      this.infoCard= {
        cardNumber: newCard.cardNumber,
        name: newCard.name,
        expireMonth: newCard.expireMonth,
        expireYear: newCard.expireYear,
        currentYear: newCard.currentYear,
        vendor: newCard.vendor,
        id: newCard.id,
      }
    },
    giveCard(){
        this.$root.savedCards.push(this.infoCard)
        this.$router.push("/")

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