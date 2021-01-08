<template>
  <div>
    <form class="card-form">
      <label for="card-number">CARD NUMBER</label>
      <input class="col-2" type="text" :maxlength="cardNumberMax"
             id="card-number"
             name="card-number"
             v-model="card.cardNumber"
             v-on:input="$emit('sendInfoCard', card)">
      <label for="cardholder-name">CARDHOLDER NAME</label>
      <input class="col-2" type="text" :maxlength="cardHolderNameMax"
             id="cardholder-name"
             name="cardholder-name"
             v-model="card.name"
             v-on:input="$emit('sendInfoCard', card)">
      <label for="valid-mm">MM</label>
      <label for="valid-yy">YY</label>
      <select
          name="valid-thru-mm"
          id="valid-mm"
          v-model="card.expireMonth"
          v-on:change="$emit('sendInfoCard', card)">
        <option
            v-for="n in 12"
            :value="n < 10 ? '0' + n : n"
            :key="n">
          {{ 10 > n ? "0" + n : n }}
        </option>
      </select>
      <select
          name="valid-thru-yy"
          id="valid-yy"
          v-model="card.expireYear"
          v-on:change="$emit('sendInfoCard', card)">
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
      <label for="vendor">VENDOR</label>
      <select name="vendor" class="col-2"  id="vendor" v-model="card.vendor"
              v-on:change="$emit('sendInfoCard', card)">
        <option value="bitcoin">Bitcoin</option>
        <option value="evil">Evil</option>
        <option value="ninja">Ninja</option>
        <option value="blockchain">Blockchain</option>
      </select>
    </form>
    <router-link class="cta" to="/" onclick="fixCard()"></router-link>
  </div>
</template>

<script>

export default {
  name: "CardForm",
  data() {
    return {
      card: {
        cardNumber: "",
        name: "",
        expireMonth: "",
        expireYear: "",
        vendor: "",
        id: Date.now(),
      },
      cardNumberMax: 16,
      cardHolderNameMax: 25,
    }
  }
}
</script>

<style>

.evil {background: red}
.bitcoin {background: orange}
.ninja {background: darkgray}
.blockchain {background: hotpink}

.card-form {
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 0 1rem
}

.card-form label {
  padding: .25rem 0;
  font-size: .7rem;
  text-transform: uppercase
}

.card-form input, select {
  border: 1px solid #000;
  border-radius: .25rem;
  padding: .5rem;
  height: 2.6rem;
  margin: 0 0 .8rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

button {
  background-color: black;
  color: white;
  border: 1px solid #000;
  border-radius: .25rem;
  padding: .10rem;
  height: 2.6rem;
  margin-top: 1.5rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
}

.col-2 {
  grid-column: auto/span 2
}
</style>