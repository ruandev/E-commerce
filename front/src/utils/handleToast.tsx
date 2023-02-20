import { useToast } from '@chakra-ui/react'
export function handleToast(title:string) {
    const toast = useToast()
    toast({
        title,
        position: 'top-right',
        status: 'success',
        duration: 700,
        isClosable: true,
      })
}