import React from 'react'
import Logo from '../../Logo/index'
import Sidebar from '../Sidebar'
import { NavContainer } from './style'
import { TbCirclePlus, TbCircleMinus, TbChartLine } from 'react-icons/tb'
import { MdOutlineCreditScore } from 'react-icons/md'
import $ from 'jquery'

const openAddMenu = (event) => {
  const menu = $(event.target).next('.closed').toggle('fast');
}

export default function Navbar() {
  return (
    <NavContainer>
      <Logo content="header" />
      <ul>
        <li>
          <div className="icon__container" onClick={openAddMenu}>
            <TbCirclePlus className="icon" />
          </div>
          <div className="content closed">
            <Sidebar />
          </div>
        </li>
        <li>
          <div className="icon__container">
            <TbCircleMinus className="icon" />
          </div>
        </li>
        <li>
          <div className="icon__container">
            <MdOutlineCreditScore className="icon" />
          </div>
        </li>
        <li>
          <div className="icon__container">
            <TbChartLine className="icon" />
          </div>
        </li>
      </ul>
    </NavContainer>
  )
}
