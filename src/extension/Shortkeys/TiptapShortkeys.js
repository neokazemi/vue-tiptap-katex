import {Extension} from '@tiptap/core';
import mixinConvertToTiptap from '../../mixins/convertToTiptap';

const Shortkeys = Extension.create({
    addKeyboardShortcuts() {
        return {
            // Paste Shortkey
            'Mod-v': () => navigator.clipboard.readText()
                .then(text => {
                    let string = mixinConvertToTiptap.methods.convertToTiptap(text)
                    this.editor.commands.insertContent(string)
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                }),
            // Insert TiptapInteractiveKatex
            'Mod-Alt-q': () => {
                this.editor.chain().focus().insertContent('<tiptap-interactive-katex-inline editMode="true" katex=" "></tiptap-interactive-katex-inline> ').run()
            }
        }
    }
})

export default Shortkeys