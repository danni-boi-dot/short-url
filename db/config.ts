import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    user_id: column.number({primaryKey: true}),
    username: column.text(),
    email: column.number(),
    password: column.number(),
  }
})
const short_url = defineTable({
  columns: {
    original_url: column.text(),
    short_code: column.text(),
    url_id: column.number({references: () => User.columns.user_id}),
  }
})

export default defineDb({
  tables: { 
    User,
    short_url
  },
})