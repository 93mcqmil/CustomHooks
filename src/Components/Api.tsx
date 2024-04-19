import axios from "axios";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};
export default function Fetch() {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res: any) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Type: {data.type}</p>
          <p>Setup: {data.setup}</p>
          <p>Punchline: {data.punchline}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
