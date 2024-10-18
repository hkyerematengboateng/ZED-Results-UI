import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import Alert from '@mui/material/Alert';
import {DataGrid} from '@mui/x-data-grid'
import { createClient } from 'redis';
import { cleanFilterItem } from '@mui/x-data-grid/hooks/features/filter/gridFilterUtils';
import {io} from "socket.io-client";
const columns = [
    {field: 'PredictedClass', headerName: 'Predicted Class',flex: 0.5,minWidth: 5, },
    { field: 'Softmax', headerName: 'Prediction Probability (%)',flex: 0.5,minWidth: 5,align: 'center' },
    // { field: 'audio_start_time', headerName: 'Audio Start time',flex: 0.5,minWidth: 5, },
    // { field: 'audio_end_time', headerName: 'Audio end time',flex: 0.5,minWidth: 5, },
    // { field: 'location', headerName: 'Location',flex: 0.5,minWidth: 5, renderCell:displayGeoLocation}
  ]
function DetectionResultsPage(){
    const [results, setResults] = useState([] as string[]);
    const [socketStatus, setSocketStatus] = useState(false)
    const [messages, setMessages] = useState("");
    const [prevResults, setPrevResults] = useState([] as any);
    useEffect(() => {
      const socket = io("http://localhost:5000",{
        withCredentials: true
      });

      socket.on('connect',()=>{
        console.log("Connected")
      })
      socket.on('message',(message) => {
        console.log(message)
        setResults((results)=> [...results, message])
      })

      }, []);



    let counter = 0
function getRowIndex(){
  counter = counter +1 
  return counter
}
    return (
        <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Results
        </Typography>
        <List>
          {results.map((result: any, index: React.Key | null | undefined) => (
            
            <ListItem key={index}>
              <ListItemText primary={`Detected Class: ${result.pred_class} Detection Confidence Score: ${result.pred_prob}`} />
            </ListItem>
          ))}
        </List>

      </Container>
    )
}
export default DetectionResultsPage