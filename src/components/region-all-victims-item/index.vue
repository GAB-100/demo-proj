<template>
    <div class="region-all-item-container flex flex-col md:flex-row border pt-5 md:py-10 my-5">
        <p class="region-all-item-name block md:hidden text-center text-2xl font-bold pt-2 pb-5">{{ data.name }}</p>
        <div class="w-full flex pb-5 md:pb-0">
            <div
                class="region-all-item-first flex justify-center md:block md:justify-start items-center w-1/3 md:w-2/5 px-3 md:px-10">
                <p class="hidden md:block region-all-item-name text-2xl font-bold">{{ data.name }}</p>
                <p class="text-center md:text-left">{{ data.location }}</p>
            </div>

            <div
                class="region-all-item-second flex justify-center md:justify-start items-center w-1/3 md:w-1/4 px-3 md:px-10 border-x border-black">
                <span class="text-center md:text-left">{{ data.position }}</span>
            </div>

            <div class="region-all-item-third flex justify-center md:justify-start items-center w-1/3 md:w-1/4 px-3 md:px-10">
                <span class="text-center md:text-left">{{ data.job }}</span>
            </div>
        </div>

        <button class="region-all-item-read-more mx-auto bg-[#951b1f] hover:bg-black w-36 h-12 text-white">
            Read more &rarr;
        </button>
    </div>
</template>
  
<script>
export default {
    name: 'RegionAllVictimsItem',
    props: ['data']
}
</script>
  