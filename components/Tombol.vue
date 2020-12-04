<template>
  <div>
    <button @click="tekan">Tombol serba guna {{sample}}</button>
    <p>{{parent}}</p>
  </div>
</template>
<script>
export default {
  props:["sample","tekan","parent"],
  methods:
  {
    tekan()
    {
      this.$emit("tekan","dari child")
    },
    tekanChild()
    {
      alert("as")
    }
  }
}
</script>