export default function revalidateCache(id: string, paths: string[]) {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key: any, value: any) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  return fetch("/api/revalidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, paths }, getCircularReplacer()),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
