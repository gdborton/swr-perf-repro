import SWRList from "../swrList";
import Link from "next/link";

export default function () {
  return (
    <div>
      <div>
        <div>
          <Link href="/withoutswr">Without SWR</Link>
        </div>
        <div>
          <Link href="/withswr">With SWR</Link>
        </div>
        <SWRList />;
      </div>
    </div>
  );
}
