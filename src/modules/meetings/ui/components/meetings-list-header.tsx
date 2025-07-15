"use client";
import { DEFAULT_PAGE } from "@/constants";
import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { useState } from "react";
import { MeetingsSearchFilter } from "./meetings-search-filter";
import { MeetingsStatusFilter } from "./status-filter";
import { AgentIdFilters } from "./agent-id-filters";
import { useMeetingsFilters } from "../../hooks/use-meetings-filter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const MeetingsListHeader = () => {
  const [filter, setFilters] = useMeetingsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isAnyFiltersModified =
    !!filter.status || !!filter.agentId || !!filter.search;

  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: DEFAULT_PAGE,
    });
  };

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-5">
        <div className="flex  items-center justify-between">
          <h5 className=" font-medium semibold text-2xl"> My Meetings</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Meetings
          </Button>
        </div>

        <ScrollArea>
          <div className=" flex items-center gap-x-2 p-1">
            <MeetingsSearchFilter />
            <MeetingsStatusFilter />
            <AgentIdFilters />
            {isAnyFiltersModified && (
              <Button variant="outline" onClick={onClearFilters}>
                <XCircleIcon className="size-4" />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
