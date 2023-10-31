<template>
  <div class="p-10">
    <router-link class="p-2 text-blue-700" to="crimes-region">
      Crimes of West of Essos
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
    }
  },
})
</script>

<style scoped lang="scss">
h1 {
  font-size: 1rem;
}
</style>
