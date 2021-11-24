import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@mui/material/Grid";
import {useNavigate } from "react-router-dom";


export default function Home() {
  const history = useNavigate();
  const [jobProfileData, setJobProfileData] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      var raw = undefined;

      var requestOptions = {
        method: "GET",
        body: raw,
        redirect: "follow",
      };
      const result = await fetch(
        `https://us-central1-react-auth-727ef.cloudfunctions.net/api/jobprofileusers`,
        requestOptions
      );
      let res = await result.json();
      console.log(typeof res);
      setJobProfileData(res.data);
    }

    fetchUsers();
  }, []);

  const handleFullDetails = (id, e) => {
    //
    const value = jobProfileData.find((doc) => doc.id === id);
    console.log(value);
    history(`/profile/${id}`, { state: value });
  };
  const handleRejected = (status, e) => {
    const value = [];
    jobProfileData.forEach((doc) => {
      if (doc.status === status) {
        value.push(doc);
      }
    });
    history("/rejected", { state: value });
  };
  const handleShortListed = (status, e) => {
    const value = [];
    jobProfileData.forEach((doc) => {
      if (doc.status === status) {
        value.push(doc);
      }
    });
    history("/shortlisted", { state: value });
  };
  return (
    <>
      {jobProfileData.length>0?
      <div
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop:"20px"
      }}
    >
      <Button
        onClick={(e) => handleRejected("rejected", e)}
        variant="outlined"
        className="actionButton"
      >
        Rejected
      </Button>
      <Button
        onClick={(e) => handleShortListed("shotlisted", e)}
        variant="outlined"
        className="actionButton"
      >
        ShortListed
      </Button>
    </div>:""}
      <Grid className="layout" container spacing={2}>
        {jobProfileData.map((profile, index) => {
          return (
            <>
              <Grid item xs={12} md={4} sm={4} key={profile.id}>
                <Card
                  key={index}
                  className="profileCard"
                  onClick={(e) => handleFullDetails(profile.id, e)}
                  id={profile.id}
                >
                  <img
                    className="images"
                    src={profile.Image}
                    alt={profile.name}
                  />
                  <h2 className="name">{profile.name}</h2>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
