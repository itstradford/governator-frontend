import type { NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AddIcon, SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  VStack,
  Grid,
  Text,
  Flex,
  Image,
  Spinner,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Govcrumb from 'components/BreadCrumb'
import useServers from 'hooks/useServers'
import { FiBarChart } from 'react-icons/fi'

const Dashboard: NextPage = () => {
  const router = useRouter()
  const { loading, currentServer } = useServers()

  return (
    <Box bg='dark-2' minH='calc(100vh - 60px)' pt='4rem' pb='8rem'>
      <Box bg='dark-1' maxW='6xl' mx='auto' p='2rem 3rem'>
        <Govcrumb currentServerName={currentServer?.name} />
        {loading && (
          <Flex justifyContent='center' alignItems='center' mt='5rem'>
            <VStack spacing={10}>
              <Spinner color='gray.200' />
            </VStack>
          </Flex>
        )}
        {!loading && (
          <>
            <Text
              as='span'
              display='block'
              color='gray.200'
              mx='auto'
              w='max-content'
              fontSize='2xl'
              mt='2rem'
            >
              Poll Listings
            </Text>
            <Table variant='simple' mt='2rem'>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot>
            </Table>
          </>
        )}
      </Box>
    </Box>
  )
}

export default Dashboard
