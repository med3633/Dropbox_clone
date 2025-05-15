import { integer, pgTable, varchar , text , uuid , boolean, timestamp} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { use } from "react";
import { time } from "console";

//design your db schema here
export const files = pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),
    // basic file/folder info
    name: text("name").notNull(),
    path: text("path").notNull(),
    size: integer("size").notNull(), // size in bytes
    type: text("type").notNull(), // file or folder
    //storage info
    //KEEP INF OF THE FILES IN THE DB
    fileUrl: text("file_url").notNull(), // url to the file in the storage
    //can be nul
    thumbnailUrl: text("thumbnail_url"), // url to the thumbnail of the file in the storage
    //who create this file
    userId: uuid("user_id").notNull(), // user who created the file
    //keep parent of documents
    parentId: uuid("parent_id"), // parent folder id (null if root folder)
    //  file/folder flags
    isFolder: boolean("is_folder").notNull().default(false),
    // mark started 
    isStarted: boolean("is_started").notNull().default(false),
    // mark trashed
    isTrashed: boolean("is_trashed").notNull().default(false),
   
    // when created is timestamp
    createdAt: timestamp("created_at").defaultNow().notNull(),
    // when updated is timestamp
    updatedAt: timestamp("updated_at").defaultNow().notNull(),


});