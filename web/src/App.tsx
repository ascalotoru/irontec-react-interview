import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';
import { ActivityList } from './components/ActivityList';
import { URL } from './resources/settings'
import { Activities } from './resources/types';
import { SearchPanel } from './components/SearchPanel';

function App() {

  const [activities, setActivities] = useState<Activities[]>([])
  const [cont, setCont] = useState(0)

  const getResults = async () => {
    const res = await (await fetch(URL)).json()
    setActivities([...activities, res])
    if (cont < 10) {
      setCont(cont + 1)
    }
  }

  const handleClick = async () => {
    setActivities([])
    setCont(0)
    getResults()
  }

  useEffect(() => {
    getResults().then( (value) => {
      if (cont < 10) {
        setCont(cont + 1)
      }
    })
  }, [cont])
  
  return (
    <Container>
      <Row>
        <h1>Are you bored? - Here are some activities that you can do.</h1>
      </Row>
      <Row>
        <Col>
          <SearchPanel activityList={activities} />
        </Col>
      </Row>
      <Row>
        <ActivityList activityList={activities} />
      </Row>
      <Row>
        <Col>
          <Button
            variant='primary'
            onClick={handleClick}
          >Actualizar</Button>
        </Col>
        </Row>
    </Container>
  );
}

export default App;
