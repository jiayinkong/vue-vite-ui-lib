import { defineComponent, h, PropType } from 'vue';
import 'uno.css';
import { Size } from './const';

export type ISize = "small" | "medium" | "large";
export type IColor = 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink';

export const props = {
    color: {
        type: String,
        default: 'blue'
    },
    size: {
        type: String as PropType<ISize>,
        default: 'medium'
    },
    round: {
        type: Boolean,
        default: false
    },
    plain: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    }
} as const;

export default defineComponent({
    name: 'MyButton',
    props,
    setup(props, { slots }) {
        return () => <button
            class={`
                py-${Size[props.size].y}
                px-${Size[props.size].x}
                ${props.round ? 'rounded-full' : 'rounded-lg'}
                bg-${props.color}-${props.plain ? '100' : '500'}
                hover:bg-${props.color}-400
                border-${props.color}-500
                cursor-pointer 
                border-solid
                text-${props.plain ? props.color + '-500' : 'white'}
                text-${Size[props.size].text}
                hover:text-white
                transition duration-300 ease-in-out trasnform hover:scale-105
                mx-1
            `}
        >
            {props.icon !== '' ? (
                <i class={`i-ic-baseline-${props.icon} p-3`}></i>
            ) : (
                ''
            )}
            {slots.default ? slots.default() : props.icon ? '' : 'pure-button'}
        </button>
    }
})