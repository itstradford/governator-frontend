import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export interface T_crumbs {
  href: string
  name: string
  disabled?: true
}
;[]

const Govcrumb: React.FC = () => {
  const [crumb, setCrumb] = useState([])

  const router = useRouter()

  useEffect(() => {
    const path = router.asPath
    const paths = path.split('/')
    const crumbs: T_crumbs[] = []

    if (paths.length >= 2) {
      crumbs.push({
        href: '/servers',
        name: 'Servers',
      })
    }
    if (paths.length >= 3) {
      crumbs.push({
        href: `/servers/${router.query.serverId}`,
        name: 'Dashboard',
      })
    }
    if (paths.length >= 4) {
      crumbs.push({
        href: `/servers/${router.query.serverId}/polls`,
        name: 'Polls',
      })
    }
    if (paths.length >= 5) {
      crumbs.push({
        href: `/servers/${router.query.serverId}/polls/${paths[4]}`,
        name: 'Create',
        disabled: true,
      })
    }

    setCrumb(crumbs)
  }, [router.query])

  return (
    <Breadcrumb
      spacing='8px'
      separator={<ChevronRightIcon color='black' />}
      color='gray.300'>
      {crumb.map((_crumb: T_crumbs, idx: number) => {
        return (
          <BreadcrumbItem key={idx}>
            {_crumb.disabled ? (
              <Text>{_crumb.name}</Text>
            ) : (
              <BreadcrumbLink color='#fe0000' fontWeight={700} href={_crumb.href}>{_crumb.name}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export default Govcrumb
