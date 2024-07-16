/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { constants } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

import { getTagProps, validateTagProp } from './utils'

export const SmoothDndDraggable = defineComponent({
    name: 'SmoothDndDraggable',
    props: {
        tag: {
            validator: validateTagProp,
            default: 'div'
        }
    },
    render: function () {
        //wrap child
        const tagProps = getTagProps(this, constants.wrapperClass)
        return h(tagProps.value, Object.assign({}, tagProps.props), this.$slots?.default?.())
    }
})
