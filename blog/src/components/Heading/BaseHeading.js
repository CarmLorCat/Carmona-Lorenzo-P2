import React from 'react'
import propTypes from 'prop-types'
import {Heading} from 'rebass'

const BaseHeading = ({children, ...rest})=>
<Heading {...rest}>
{children}
</Heading>

BaseHeading.propTypes={
    children: propTypes.node.isRequired
}

export {BaseHeading}