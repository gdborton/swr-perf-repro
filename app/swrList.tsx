"use client";
import useSWR from "swr";

const SWRComp = ({ withSWR }: { withSWR: boolean }) => {
  const { data } = useSWR(withSWR ? "/api/data" : null, (key) => {
    console.log("key", key);
    return {
      data: "data",
    };
  });
  return <div>{String(withSWR)}</div>;
};

export default function SWRList({ withSWR = true }) {
  const components = [];
  while (components.length < 1000) {
    components.push(<SWRComp withSWR={withSWR} />);
  }
  return <>{components}</>;
}
