"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";

import { NewAgentDialog } from "./new-agent-dialog";
import { useAgentsFilters } from "../../hooks/use-agent-filter";
import { AgentsSearchFilter } from "./agents-search-filter";
import { DEFAULT_PAGE } from "@/constants";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const AgentsListHeader = () => {
  const [filters, setFilters] = useAgentsFilters();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isAnyFilterModified = !!filters.search;

  const onClearFilters = () => {
    setFilters({
      search: "",
      page: DEFAULT_PAGE,
    });
  };

  return (
    <>
      <NewAgentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <div className="py-4 px-4 md:px-8 felx flex-col gap-y-5">
        <div className="flex  items-center justify-between">
          <h5 className=" font-medium semibold text-2xl"> My Agents</h5>
          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
            New Agent
          </Button>
        </div>
        <ScrollArea>
          <div className=" flex items-center gap-x-2 p-1">
            <AgentsSearchFilter />
            {isAnyFilterModified && (
              <Button variant="outline" size="sm" onClick={onClearFilters}>
                <XCircleIcon />
                clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
