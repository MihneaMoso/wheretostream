import { DateTime, Str } from "chanfana";
import type { Context } from "hono";
import { z } from "zod";

export type AppContext = Context<{ Bindings: Env }>;

export const Task = z.object({
	name: Str({ example: "lorem" }),
	slug: Str(),
	description: Str({ required: false }),
	completed: z.boolean().default(false),
	due_date: DateTime(),
});

export const Movie = z.object({
	title: Str({ example: "The Wolf Of Wall Street" }),
    preview_image: Str(),
    description: Str(),
    available: z.boolean().default(false),
    provider: Str({ required: false }),
    link: Str()
})

export const Provider = z.object({
	name: Str(),
	link: Str(),
})