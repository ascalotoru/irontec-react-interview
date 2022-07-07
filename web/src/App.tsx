import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import { ActivityList } from './components/ActivityList';
import { URL } from './resources/settings'
import { Activities } from './resources/types';

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
  
  useEffect(() => {
    getResults()
  }, [cont])
  
  return (
    <Container>
      <Row>
        <h1>Are you bored? - Here are some activities that you can do.</h1>
      </Row>
      <Row>
        <ActivityList activityList={activities} />
      </Row>
    </Container>
  );
}

export default App;
