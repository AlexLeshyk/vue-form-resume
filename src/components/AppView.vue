<template>
  <div class="card card-w70">
    <template v-if="elements.length">
      <component
        v-for="block in elements"
        v-bind:key="block.id"
        v-bind:is="'block-' + block.type"
        v-bind:value="block.value"
        v-bind:blockName="block.name"
        v-bind:id="block.id"
        v-bind:elements="elements"
        v-on:remove="$emit('remove-block',block.id)"
      >
      </component>
    </template>
    <p v-else>{{$translate('noBlocks')}}</p>
  </div>
</template>

<script>
import BlockSubtitle from './blocks/BlockSubtitle'
import BlockText from './blocks/BlockText'
import BlockTitle from './blocks/BlockTitle'
import BlockAvatar from "./blocks/BlockAvatar";

export default {
  name: "AppView",
  props: ['elements','languageBase'],
  components: {
    BlockSubtitle: BlockSubtitle,
    BlockText: BlockText,
    BlockTitle: BlockTitle,
    BlockAvatar: BlockAvatar,
  },
}
</script>

<style scoped>

</style>