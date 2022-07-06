import React from 'react'
import { ActivityListProps } from '../resources/types';
import { Row } from './Row';
import Table from 'react-bootstrap/Table';

export const ActivityList = (props: ActivityListProps) => {
  const activityList = props.activityList
  return (
    <Table striped>
      <thead>
        <tr>
        <th>Activity</th>
        <th>Type</th>
        <th>Participants</th>
        <th>Price</th>
        <th>Link</th>
        <th>Key</th>
        <th>Accesibility</th>
        </tr>
      </thead>
      <tbody>
        {
          activityList.map( (e, index) => {
            return <Row key={index} activities={e} />
          })
        }
      </tbody>
    </Table>
  )
}
