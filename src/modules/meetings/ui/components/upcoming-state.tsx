import Link from "next/link";
import { VideoIcon } from "lucide-react";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";

interface Props {
  meetingId: string;
}

export const UpcomingState = ({ meetingId }: Props) => {
  return (
    <div className="bg-white roudned-lg shadow p-6 flex flex-col items-center justify-center">
      <EmptyState
        image="/upcoming.svg"
        title="No Upcoming Meetings"
        description="You have no upcoming meetings scheduled. Please check back later or schedule a new meeting."
      />
      <Button asChild className="w-full lg:w-auto">
        <Link href={`/call/${meetingId}`}>
          <VideoIcon />
          Start Meeting
        </Link>
      </Button>
    </div>
  );
};
