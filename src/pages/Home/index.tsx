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
  }, []);

  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-8">
        {data.map((item) => (
          <div
            className="bg-white rounded-xl shadow-md p-4 w-full h-full relative"
            key={item.id}
          >
            <section className="w-full text-center text-gray-800 flex flex-col items-center justify-center">
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                Nutrição Clínica
              </span>
              <img
                src={item.capa}
                alt={item.titulo}
                className="rounded-md py-4 w-full aspect-video object-cover"
              />
              <strong className="text-lg leading-tight">{item.titulo}</strong>
              <p className="mt-4 ">{item.subtitulo}</p>
            </section>
          </div>
        ))}
      </div>
    </Card>
  );
};
