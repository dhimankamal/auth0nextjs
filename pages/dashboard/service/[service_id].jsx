import React from 'react'
import { useRouter } from 'next/router'


export default function ServiceForm() {
    const router = useRouter()
    const { service_id } = router.query

  return (
    <div>ServiceForm - {service_id}</div>
  )
}
