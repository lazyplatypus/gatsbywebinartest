import { CheckIcon } from '@chakra-ui/icons'
import { Box, Circle, Collapse, Heading, HStack, Icon, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { useStep } from './useStep'

export const Step = (props) => {
  const { title, children, ...boxProps } = props
  const { isActive, isCompleted, step } = useStep()
  const accentColor = useColorModeValue('pink.400', 'pink.300')
  const mutedColor = useColorModeValue('gray.600', 'whiteAlpha.800')
  const activeColor = useColorModeValue('white', 'black')
  return (
    <Box {...boxProps}>
      <HStack spacing="4">
        <Circle
          size="8"
          fontWeight="bold"
          color={isActive ? activeColor : isCompleted ? accentColor : mutedColor}
          bg={isActive ? accentColor : 'transparent'}
          borderColor={isCompleted ? accentColor : 'inherit'}
          borderWidth={isActive ? '0px' : '1px'}
        >
          {isCompleted ? <Icon as={CheckIcon} /> : step}
        </Circle>
        <Heading
          fontSize="xl"
          fontWeight="semibold"
          color={isActive || isCompleted ? 'inherit' : mutedColor}
        >
          {title}
        </Heading>
      </HStack>
      <Collapse in={isActive}>{children}</Collapse>
    </Box>
  )
}
