import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import "../index.css";

export const App = () => {
  const [user, setUser] = useState();
  const userEndpointUrl = "https://api.github.com/search/users?q=YOUR_NAME";

  useEffect(() => {
    fetch(userEndpointUrl)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="users">
        <Typography
          sx={{
            fontSize: 22,
            fontFamily: "Quicksand",
          }}
        >
          Users app
        </Typography>
      </div>

      <Grid container sx={{ padding: "2rem" }} spacing={{ xs: 2, md: 3 }}>
        {user &&
          user?.items?.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <UserCard
                login={item.login}
                image={item.avatar_url}
                score={item.score}
              />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
