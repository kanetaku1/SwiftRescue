import { useState, useCallback } from "react";
import { BASE_URL } from "@/services/APIConfig";

interface APIResponseProps {
  message: string;
  processed_image?: string;
  sound?: {
    straighten_elbow: boolean;
    move_forward: boolean;
    move_backward: boolean;
  };
}

export default function usePost(endpoint: string) {
  const [data, setData] = useState<APIResponseProps | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const postData = useCallback(
    async (body: any) => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setErrorMsg(`${error.message}`);
      } finally {
        setLoading(false);
      }
    },
    [endpoint]
  );

  return { data, errorMsg, loading, postData };
}
