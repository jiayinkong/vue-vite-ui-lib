import { defineComponent, h, PropType } from 'vue';
import 'virtual:windi.css';

export type IColor = 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink';
export const props = {
    color: {
        type: String as PropType<string>,
        default: 'blue'
    }
}

export default defineComponent({
    name: 'MyButton',
    props,
    setup(props, { slots }) {
        return () => <button
            class={`
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props.color}-500 
                hover:bg-${props.color}-700 
                border-none 
                cursor-pointer 
            `}
        >{slots.default ? slots.default() : 'pure button'}</button>
    }
})