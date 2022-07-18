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
  const [cont, setCont] = useState(0)
  const [fullActivities, setFullActivities] = useState(activities)

  const getResults = async () => {
    const res = await (await fetch(URL)).json()
    setActivities([...activities, res])
  }

  const handleClick = async () => {
    setActivities([])
    setCont(0)
    getResults()
  }

  useEffect(() => {
    getResults().then( () => {
      if (cont < 10) {
        setCont(cont + 1)
      }
      setFullActivities(activities)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cont])
  
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
