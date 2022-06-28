
interface Params {
    link: string
}

const getFetchUrl = ({ link }: Params) => {
    const url = new URL("http://localhost:3000/api/screenshot");
    url.searchParams.append('url', link);
    return url.href;
};

export const fetchUrl = async (link: string, signal: AbortSignal) => {
    const url = getFetchUrl({link});

  try {
    const res = await fetch(url, { signal });
    let imageBlob;
 
    if (res.ok) imageBlob = await res.blob();
    const imageBlobText = await imageBlob?.text();

    return {
      imageBlobText: JSON.parse(imageBlobText!).blob,
      error: !res.ok,
      aborted: false,
    };
  } catch (err) {
    const isAborted = err.name === "AbortError";
    return {
        imageBlob: undefined,
        error: !isAborted,
        aborted: isAborted
    }
  }
};
