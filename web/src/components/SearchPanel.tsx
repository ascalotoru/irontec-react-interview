import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { SearchPanelProps } from '../resources/types';

export const SearchPanel = ( { setActivities, fullActivityList }:SearchPanelProps ) => {
  const [searchActivity, setSearchActivity] = useState('')
  const [searchType, setSearchType] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    if (field === "activity") {
      setSearchActivity(e.target.value)
    } else {
      setSearchType(e.target.value)
    }
  }

  useEffect(() => {
    const results = fullActivityList.filter(activities => 
      activities.activity.toLowerCase().includes(searchActivity.toLocaleLowerCase()))
      setActivities(results)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchActivity])

  useEffect(() => {
    const results = fullActivityList.filter(activities => 
      activities.type.toLowerCase().includes(searchType.toLocaleLowerCase()))
      setActivities(results)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchType])
  
  return (
    <>
      <div id="search">
        <Collapse in={open}>
          <Form>
            <Form.Group controlId='filterForm'>
              <Col xs>
                <Form.Control type='text' placeholder='Activity' name='activity' value={searchActivity} onChange={handleChange} />
              </Col>
              <Col xs>
                <Form.Control type='text' placeholder='Type' name='type' value={searchType} onChange={handleChange} />
              </Col>
            </Form.Group>
          </Form>
        </Collapse>
      </div>
      <Col>
        <Button
          variant='primary'
          onClick={() => setOpen(!open)}
        >
          Buscar
        </Button>
      </Col>
    </>
  )
}
