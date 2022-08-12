import React from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import RepairDock from '../components/RepairDock'
import ServicesEquipment from '../components/ServicesEquipment'
import LifeSaving from '../components/LifeSaving'
import Footer from '../components/Footer'

const ServiceDetail = () => {
  const { uuid } = useParams()

  return (
    <>
      <Header />
      {uuid === 'repair-docking' && <RepairDock />}
      {uuid === 'services-equipment' && <ServicesEquipment />}
      {uuid === 'life-saving' && <LifeSaving />}
      <Footer />
    </>
  )
}

export default ServiceDetail
