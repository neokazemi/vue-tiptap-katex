<template>
  <node-view-wrapper class="vue-component ma-4" data-drag-handle>
    <span class="label" contenteditable="false">Not shown in konkoor view</span>
    <div>
      <node-view-content class="content" dir="auto" />
    </div>
  </node-view-wrapper>
</template>

<script>

    import {NodeViewWrapper, NodeViewContent, nodeViewProps} from '@tiptap/vue-2'
    import MixinComponentReading from 'vue-tiptap-katex-core/components/reading/mixin'

    export default {
        name: 'TiptapInteractiveReading',
        mixins: [MixinComponentReading],
        components: {
            NodeViewWrapper,
            NodeViewContent
        },
    }
</script>

<style scoped>
  .vue-component {
    border: 2px dashed #0D0D0D60;
    border-radius: 0.5rem;
    margin: 1rem 0;
    position: relative;
  }

  .label {
    margin-left: 1rem;
    background-color: #0D0D0D60;
    font-size: 0.6rem;
    letter-spacing: 1px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    top: 0;
    padding: 0.25rem 0.75rem;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .content {
    margin: 2.5rem 1rem 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
</style>
