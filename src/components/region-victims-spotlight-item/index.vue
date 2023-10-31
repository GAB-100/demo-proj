<template>
  <div class="region-spotlight-item-container bg-white px-10 pt-10 pb-16 relative">
    <div class="region-spotlight-item-header flex">
      <img class="region-spotlight-item-photo w-16 h-16 rounded-full" :src="data.photoUrl" />
      <div class="region-spotlight-item-title ml-4">
        <div class="region-spotlight-item-name text-2xl font-bold h-16 multiline-text-ellipsis">{{ data.name }}</div>
        <p class="region-spotlight-item-position mt-3 text-sm text-gray-400 h-5 multiline-text-ellipsis">{{ data.position }}</p>
      </div>
    </div>

    <div class="region-spotlight-item-description h-16 mt-6 text-sm multiline-text-ellipsis">
      {{ data.desc }}
    </div>

    <div class="region-spotlight-item-also-targeted text-base font-bold mt-6">
      Also targeted:
    </div>

    <div class="region-spotlight-item-target-container mt-6 h-16 multiline-text-ellipsis">
      <p class="region-spotlight-item-target-item text-sm" v-for="item in data.target">&rarr; {{ item }}</p>
    </div>

    <button class="region-spotlight-item-read-more absolute bottom-0 right-0 bg-[#951b1f] hover:bg-black w-36 h-12 text-white">Read more &rarr;</button>
  </div>
</template>

<script>
export default {
  name: 'RegionSpotlightItem',
  props: ['data']
}
</script>

<style scoped lang="scss"></style>
