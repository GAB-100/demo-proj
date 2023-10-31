<template>
  <div class="w-full">
    <div class="region-header bg-white px-6 py-8">
      <div>
        <router-link class="text-purple-700" to="/">&larr; Crimes of Westeros</router-link>
      </div>
    </div>
    <div class="region-first-content bg-[#eeeeee] pt-12">
      <div class="max-w-7xl mx-auto">
        <div
          class="region-detail-info-container max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-16 p-5">
          <div class="region-detail-info-map flex justify-center md:w-[400px]">
            <img class="md:w-[400px]" :src='mapImage' />
          </div>
          <div class="region-detail-info-content  w-fit">
            <div class="region-detail-info-title flex items-center gap-3 text-black">
              <span class="text-4xl font-bold">Crimes of West of Essos</span>
              <div
                class="region-detail-info-score border-white border-4 bg-orange-200 rounded-full min-w-[40px] h-10 flex justify-center items-center text-base font-bold">
                01
              </div>
            </div>
            <div class="region-detail-info-description text-base mt-6 text-black">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Viverra sed eget sed sed nisi sit tellus nunc. telling of over 300 bad crimes against important and
                well-know
                figures on the continent of Westeros. Faucibus euismod feugiat cursus.
              </p>

              <div class="mt-8">
                <a class="text-purple-700" href="#">Read full reporting &rarr; </a>
              </div>
            </div>
          </div>
        </div>

        <div class="region-victims-spotlight-container mt-10 p-5">
          <div class="region-victims-spotlight-title flex justify-center text-3xl font-bold">
            Spotlight of the victims &nbsp; <span class="cursor-pointer" v-on:click="isShowSpotlight = !isShowSpotlight">{{ isShowSpotlight ? '-' : '+' }}</span>
          </div>

          <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10" v-if="isShowSpotlight">
            <region-victims-spotlight-item v-for="item in filteredData" :data="item" />
          </div>
        </div>
      </div>

      <div class="region-second-content bg-white mt-28 py-28">
        <div class="region-all-victims-container max-w-5xl mx-auto  p-5">
          <div class="region-all-victims-title flex justify-center text-3xl font-bold">
            All the victims of West in Essos &nbsp; <span class="cursor-pointer" v-on:click="isShowAll = !isShowAll">{{ isShowAll ? '-' : '+' }}</span>
          </div>

          <div class="region-all-victims-filter-container grid grid-cols-1 md:grid-cols-10 md:gap-10 mt-10" v-if="isShowAll">
            <div class="col-span-1 md:col-span-4 py-2">
              <search-input />
            </div>
            <div class="col-span-1 md:col-span-3 py-2">
              <select class="w-full border-0 border-b" placeholder="Region">
                <option>Region1</option>
                <option>Region2</option>
              </select>
            </div>

            <div class="col-span-1 md:col-span-3 py-2">
              <select class="w-full border-0 border-b" placeholder="Profession">
                <option>Profession1</option>
                <option>Profession2</option>
              </select>
            </div>
          </div>

          <div class="region-all-victims-content mt-10" v-if="isShowAll">
            <region-all-victims-item v-for="item in allVictims" :data="item" />
          </div>

          <div class="region-all-victims-more flex justify-center mt-10" v-if="isShowAll">
            <button class="region-all-victims-more-btn bg-black w-36 h-12 text-white">
              Show more +
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import mapImage from '@/assets/images/map.png';
import { spotlightData, allVictims } from '@/constants/data';

export default defineComponent({
  data() {
    return {
      mapImage,
      filteredData: spotlightData.splice(0, 8),
      allVictims,
      isShowSpotlight: true,
      isShowAll: true,
    }
  },
  setup() {
    return {
    }
  },
  components: {
    'region-victims-spotlight-item': require('@/components/region-victims-spotlight-item').default,
    'region-all-victims-item': require('@/components/region-all-victims-item').default,
    'search-input': require('@/components/search-input').default
  }
})
</script>
  
<style scoped lang="scss">
h1 {
  font-size: 1rem;
}
</style>
  