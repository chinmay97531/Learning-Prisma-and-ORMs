import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const client = new PrismaClient();

app.get("/users", async(req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async(req, res) => {
    const id = req.params.id;
    const user = await client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true,
            password: true,
            age: true
        }
    })
    res.json({
        user
    })
})

// async function createUser() {
//    await client.user.create({
//         data: {
//             username: "Chinmay",
//             password: "12345",
//             age: 21,
//             city: "LMP"
//         }
//     })
// }

// async function findUser() {
//     const user = await client.user.findFirst({
//          where: {
//              id: 1
//          },
//          include: {
//             todos: true
//          }
//      })

//      console.log(user);
//  }

//createUser();
//findUser();

app.listen(3000, () => {
    console.log("Server is listening on PORT 3000");
})