import { useRouter } from "next/router";
import { Timeline } from "../components/Timeline";

export default function UsePage() {
  const router = useRouter();

  const name = router.query.name as string;

  return (
    <div>
      <Timeline
        where={{
          author: {
            name,
          },
        }}
      />
    </div>
  );
}
