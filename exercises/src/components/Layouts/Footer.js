import React from 'react';

import { 
  Paper, Tabs, Tab
 } from "@material-ui/core";

export default function Footer() {
  return (
    <Paper >
      <Tabs
        value={1}
        // onChange={() => ()}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
}
