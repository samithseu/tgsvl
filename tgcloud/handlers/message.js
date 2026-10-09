import { api, db } from "sdk";
import { eq } from "sdk/db";
import { messages } from "../schema.js";

export default async function (message) {
  // Save this message.
  await db
    .insert(messages)
    .values({ chatId: message.chat.id, text: message.text })
    .run();

  // Count how many we've stored for this chat.
  const count = await db.$count(messages, eq(messages.chatId, message.chat.id));

  await api.sendMessage({
    chat_id: message.chat.id,
    text: `Saved. That's ${count} message(s) from this chat so far.`,
  });
}
