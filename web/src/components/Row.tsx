import React from 'react'
import { ActivitiesProps } from '../resources/types';

export const Row = ({activities}: ActivitiesProps) => {
  return (
    <tr>
      <td>{activities.activity}</td>
      <td>{activities.type}</td>
      <td>{activities.participans}</td>
      <td>{activities.price}</td>
      <td><a href={activities.link}>{activities.link}</a></td>
      <td>{activities.key}</td>
      <td>{activities.accesibility}</td>
    </tr>
  )
}
