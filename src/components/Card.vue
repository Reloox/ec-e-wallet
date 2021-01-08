<template>
    <div class="blank card"
         :class="card.vendor"
         @click="$emit('click')">
      <header>
        <img :src="require('@/assets/chip-dark.svg')">
        <img v-if="card.vendor" :src="require('@/assets/vendor-' + card.vendor + '.svg')">
      </header>
      <section class="number">
        <div> {{ card.cardNumber }} </div>
      </section>
      <section class="info">
        <aside>
          <span>CARDHOLDER NAME</span>
          <p>{{ card.name }}</p>
        </aside>
        <aside class="valid holder">
          <span>MM/YY</span>
          <p>{{ card.expireMonth}} /{{ card.expireYear}}</p>
        </aside>
      </section>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: Object
  },
}
</script>

<style>

.blank {
  background: linear-gradient(237.75deg, hsla(0, 0%, 100%, .24), hsla(0, 0%, 100%, 0)), #d0d0d0
}

.card {
  max-width: 24rem;
  height: 14rem;
  border-radius: .6rem;
  background: #eee;
  padding: 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-shadow: 0 0 .5rem rgba(0, 0, 0, .4);
  box-shadow: 0 0 .5rem rgba(0, 0, 0, .4);
  display: grid;
  gap: .5rem 0;
  grid-template-columns:1fr 1fr;
  grid-auto-rows: 2.8rem;
  text-shadow: -1px -1px 2px hsla(0, 0%, 100%, .4)

}

.card header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start
}

.card section.number {
  font-size: 1.6rem;
  letter-spacing: .05rem;
  padding: .5rem 0 0;
  text-transform: uppercase
}

.card section.info, .card section.number {
  grid-column: auto/span 2;
  grid-row: auto/span 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex
}

.card section aside span {
  display: block;
  text-transform: uppercase;
  font-size: .7rem;
  margin: 0 0 .25rem
}

.card section aside.valid span {
  text-align: right
}

.card section aside p {
  display: block;
  text-transform: uppercase;
  margin: 0;
  padding: 0
}

.card section aside.valid p {
  text-align: right
}

.card section.info aside.holder {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1
}
</style>