import React from 'react'
import { useLocation } from 'react-router'
import Card from "@material-ui/core/Card";
import Grid from "@mui/material/Grid";
export default function ShortListed() {
    const {state} = useLocation()
    console.log(state,"shortlisted")
    return (
        <>
        {state.length > 0 ? (
          <>
            <Grid container spacing={2}>
              {state.map((details,index) => {
                  return(
                  <Grid item xs={12} md={4} sm={4} key={details.docId}>
                  <Card className="profileCard">
                    <img
                      className="images"
                      src={details.Image}
                      alt={details.name}
                    />
                    <h2 className="name">{details.name}</h2>
                    <p>{details.status}</p>
              </Card>
                </Grid>
                  )
              })}
            </Grid>
          </>
        ) : (
          <>
            <p>NO Rejected Candidates</p>
          </>
        )}
      </>
    )
}
