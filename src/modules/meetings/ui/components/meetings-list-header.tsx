"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { useState } from "react";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 felx flex-col gap-y-5">
        <div className="flex  items-center justify-between">
          <h5 className=" font-medium semibold text-2xl"> My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Meetings
          </Button>
        </div>
        <div className=" flex items-center gap-x-2 p-1">TODO: Filters</div>
      </div>
    </>
  );
};
