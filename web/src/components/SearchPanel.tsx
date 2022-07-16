import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { ActivityListProps, Activities } from '../resources/types';

export const SearchPanel = ( {activityList}:ActivityListProps ) => {
  const [searchActivity, setSearchActivity] = useState('')
  const [searchType, setSearchType] = useState('')
  const [results, setResults] = useState<Activities[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name
    if (field === "activity") {
      setSearchActivity(e.target.value)
    } else {
      setSearchType(e.target.value)
    }
  }

  useEffect(() => {
    const results = activityList.filter(activities => 
      activities.activity.toLowerCase().includes(searchActivity))
      setResults(results)
  }, [searchActivity])

  useEffect(() => {
    const results = activityList.filter(activities => 
      activities.type.toLowerCase().includes(searchType))
      setResults(results)
  }, [searchType])
  
  
  return (
    <>
      <Form>
        <Form.Group controlId='filterForm'>
          <Form.Control type='text' placeholder='Activity' name='activity' value={searchActivity} onChange={handleChange} />
          <Form.Control type='text' placeholder='Type' name='type' value={searchType} onChange={handleChange} />
        </Form.Group>
      </Form>
    </>
  )
}
