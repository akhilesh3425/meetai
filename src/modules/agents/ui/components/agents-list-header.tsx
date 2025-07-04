"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

import { NewAgentDialog } from "./new-agent-dialog";

export const AgentsListHeader = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      </div>
    </>
  );
};
