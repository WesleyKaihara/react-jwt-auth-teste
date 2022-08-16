import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';

import UserService from "../services/user.service";

export default function Home() {

  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getPublicContent().then(
      response => {
        setContent(response.data);
      },
      error => {
        setContent(
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        );
      }
    );
  }, [])
  return (
    <div className="container">
      <header className="jumbotron">
        asada
      </header>
    </div>
  );
}

