import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';import './App.css';
import { ActivityList } from './components/ActivityList';
import { URL } from './resources/settings'
import { Activities } from './resources/types';
import { SearchPanel } from './components/SearchPanel';

function App() {

  const [activities, setActivities] = useState<Activities[]>([])
  const [fullActivities, setFullActivities] = useState(activities)

  const getResults = async () => {
    const responses = await Promise.all([
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
      await (await fetch(URL)).json(),
    ])
    const result : Activities[] = []
    responses.map( (res) => {
      result.push(res)
    })
    return result
  }

  const handleClick = async () => {
    setActivities([])
    getResults().then( (data) => {
      setActivities(data)
      setFullActivities(data)
    })
  }

  useEffect(() => {
    getResults().then( (data) => {
      setActivities(data)
      setFullActivities(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <Container>
      <Row>
        <h1>Are you bored? - Here are some activities that you can do.</h1>
      </Row>
      <Row>
        <SearchPanel setActivities={setActivities} fullActivityList={fullActivities}/>
      </Row>
      <Row>
        <ActivityList activityList={activities} />
      </Row>
      <Row>
        <Col>
          <Button
            variant='primary'
            onClick={ handleClick }
          >Actualizar</Button>
        </Col>
        </Row>
    </Container>
  );
}

export default App;
