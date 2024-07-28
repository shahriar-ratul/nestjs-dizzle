import { relations } from 'drizzle-orm';
import {
    serial,
    pgTable,
    varchar,
    integer,
    timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    username: varchar('username', { length: 256 }),
    email: varchar('email', { length: 256 }),
    password: varchar('password', { length: 256 }),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});
