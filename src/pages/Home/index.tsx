import React from "react";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { ApiResponse } from "../../types/apiContract";

export const Home = () => {
  const [data, setData] = useState<ApiResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api();
        setData(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

  },[]);

  return (
    <div>
      <Card>
        <h1>conteudo</h1>
      </Card>
    </div>
  );
};
