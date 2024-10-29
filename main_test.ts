import { assertEquals } from "@std/assert";
import { handler } from "./main.ts";

Deno.test(async function handlerTest() {
  const response = await handler({} as Request, {} as Deno.ServeHandlerInfo);
  assertEquals(response.status, 200);
  const body = await response.text();
  assertEquals(body.length > 0, true);
});

Deno.test(async function handlerTestTheSequel() {
  const response = await handler({} as Request, {} as Deno.ServeHandlerInfo);
  assertEquals(response.status, 200);
  const body = await response.text();
  assertEquals(body.length > 0, true);
  const jokes = body.split('\n')
  assertEquals(jokes.length, 2);
});
