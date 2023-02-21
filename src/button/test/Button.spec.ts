import Button from '../index';

import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('Button', () => {
    test('mount @vue/test-utuils', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            }
        })

        expect(wrapper.text()).toBe('Button')
    })
})