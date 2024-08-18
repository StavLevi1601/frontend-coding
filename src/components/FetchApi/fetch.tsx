import { useEffect, useRef, useState } from "react";
import { fetchApi } from "./fetchApi";

interface InfoData {
  name: {
    first: string;
  };
  picture: {
    thumbnail: string;
  };
}

export default function FetchApi(): JSX.Element {
  const [json, setJson] = useState<string>("");
  const [info, setInfo] = useState<InfoData[]>([]);
  const prevInfoRef = useRef<InfoData[]>([]);
  const fetchData = async () => {
    const data = await fetchApi();
    const newInfo = data?.results || [];
    const newJson = JSON.stringify(data) || "";
    if (JSON.stringify(newInfo) !== JSON.stringify(prevInfoRef.current)) {
      setJson(newJson); // Stringify the data here
      setInfo(newInfo); // Use optional chaining in case data is undefined
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Random API</button>
      <p>{json}</p>
      {Array.isArray(info) &&
        info.map((data: InfoData) => (
          <>
            <h1>{data.name.first}</h1>
            <img src={data.picture.thumbnail} />
          </>
        ))}
    </div>
  );
}
