<template>
  <div>
    <button @click="increment">+1</button>
    <div>counter: {{ counter }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0
  }),
  methods: {
    increment() {
      this.counter++
    }
  }
}
</script>