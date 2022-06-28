import { Blob } from "buffer";
import { useEffect, useState } from "react";
import { fetchUrl } from "../api/fetch-url";

export const useUrl = (linkDemo: string) => {
  const [img, setImg] = useState({
    imgBlob: "",
    error: false,
    loading: true,
  });

  const setData = (newData) => {
    setImg({ imgBlob: newData, loading: false, error: false });
  };

  const setError = () => {
    setImg({ imgBlob: "", loading: false, error: true });
  };

  useEffect(() => {
    const controller = new AbortController();
    loadImageFromUrl(setData, setError, controller.signal, linkDemo)
    return ()=> controller.abort();
  }, [linkDemo]);

  return {
    img: img.imgBlob,
    imgError: img.error,
    imgLoading: img.loading,
  };
};

const loadImageFromUrl = async (setData, setError, signal, linkDemo) => {
  const { imageBlobText, aborted } = await fetchUrl(linkDemo, signal);
  if (aborted) return;
  if (imageBlobText) setData(imageBlobText);
  else setError();
};
