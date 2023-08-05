import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
 
  const Books = pgTable('books', {
  id: integer('id'),
  title: text('title'),
  author: text('author'),
});

export default Books