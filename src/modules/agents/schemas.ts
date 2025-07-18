import { z } from "zod";

export const agentsInsertSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  instructions: z.string().min(1, { message: "Agent is required" }),
  userId: z.string().min(1, { message: "User ID is required" }),
});

export const agentUpdateSchema = agentsInsertSchema.extend({
  id: z.string().min(1, { message: "Id is required " }),
});
