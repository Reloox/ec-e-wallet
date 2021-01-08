<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: {
    title: String,
    subTitle: String,
  },
}
</script>

<style scoped>

.top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-transform: uppercase
}

.top h1 {
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
  line-height: 2rem;
  font-size: 2rem;
  padding: 1.5rem 0
}

.top h1, .top p {
  text-align: center;
  margin: 0
}
.top p {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: .8rem;
  font-weight: 600;
  color: rgba(0, 0, 0, .4);
  padding: .25rem
}
</style>

