import React, { useState } from "react";
import { useLocation } from "react-router";
import { Card, Button } from "@material-ui/core";

export default function ProfileInfo(value) {
  const { state } = useLocation();
  const [status, setStatus] = useState("");
  const handleStatus = (status, e) => {
    console.log(status);
    // making the post request
    const body = {
      docId: state.docId,
      status: status,
      timestamp: Date.now(),
    };
    fetch(
      `https://us-central1-react-auth-727ef.cloudfunctions.net/api/status-change`,
      {
        method: "PUT",

        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };
  console.log(state);
  return (
    <div>
      {state !== undefined ? (
        <>
          <Card className="profileInfoCard">
            <img className="images" src={state.Image} alt={state.Image} />
            <p>{state.name}</p>
            <p style={{ fontWeight: "600" }}>Select Status</p>
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={(e) => handleStatus("rejected", e)}
                variant="outlined"
                className="actionButton"
              >
                Rejected
              </Button>
              <Button
                onClick={(e) => handleStatus("shotlisted", e)}
                variant="outlined"
                className="actionButton"
              >
                ShortListed
              </Button>
            </div>
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
