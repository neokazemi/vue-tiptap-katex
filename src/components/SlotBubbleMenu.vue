<template>
<!--  <v-btn-toggle-->
<!--    v-model="bubbleMenuItems"-->
<!--    dense-->
<!--    background-color="primary"-->
<!--    dark-->
<!--    multiple-->
<!--  >-->
<!--    <v-btn-->
<!--      :value="'bold'"-->
<!--      @click="editor.chain().focus().toggleBold().run()"-->
<!--    >-->
<!--      <v-icon>mdi-format-bold</v-icon>-->
<!--    </v-btn>-->
<!--    <v-btn-->
<!--      :value="'italic'"-->
<!--      @click="editor.chain().focus().toggleItalic().run()"-->
<!--    >-->
<!--      <v-icon>mdi-format-italic</v-icon>-->
<!--    </v-btn>-->
<!--    <v-btn-->
<!--      :value="'strike'"-->
<!--      @click="editor.chain().focus().toggleStrike().run()"-->
<!--    >-->
<!--      <v-icon>mdi-format-strikethrough</v-icon>-->
<!--    </v-btn>-->
<!--  </v-btn-toggle>-->
  <div class="tiptap-toolbar dynamic">
    <ul>
      <li>
        <div
          class="toolbar-item"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <span class="mdi mdi-format-bold toolbar-item-icon" />
        </div>
      </li>
      <li>
        <div
          class="toolbar-item"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <span class="mdi mdi-format-italic toolbar-item-icon" />
        </div>
      </li>
      <li>
        <div
          class="toolbar-item"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <span class="mdi mdi-format-strikethrough toolbar-item-icon" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import '@/css/toolbar-Item.scss'
  export default {
    name: 'SlotBubbleMenu',
    props: {
      editor: {
        type: Object,
        default: () => {}
      }
    },
    data () {
      return {
        bubbleMenuItems: [],
      }
    },
    computed: {
      computedBubbleMenuItems() {
        let items = []
        if (this.editor.isActive('bold')) {
          items.push('bold')
        }
        if (this.editor.isActive('italic')) {
          items.push('italic')
        }
        if (this.editor.isActive('strike')) {
          items.push('strike')
        }

        return items
      }
    },
    watch: {
      computedBubbleMenuItems () {
        this.bubbleMenuItems = this.computedBubbleMenuItems
      }
    }
  }
</script>

<style scoped>

</style>
