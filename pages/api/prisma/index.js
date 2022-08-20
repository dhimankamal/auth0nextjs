import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const data = req.body
  if (req.method === 'POST') {
    console.log('data review in api ', data)
    //const { sub, nickname, email } = req.body

    // await prisma.user.create({
    //   data:{
    //     userid: data.user.sub,
    //     email:data.user.email,
    //     name:data.user.nickname
    //   }
    // })

    const userResp = await prisma.user.upsert({
      where: {
        userid: data.user.sub
      },
      update: {
        name:'update name 2'
      },
      create: {
        userid: data.user.sub,
        email: data.user.email,
        name: data.user.nickname
      }
    })
    //console, log('udpate resposne is', createUser)
    res.status(201).json(userResp)
  }

  try {
    const result = await prisma.user.findMany()
    res.status(200).json(result)
  } catch (err) {
    console.log(err)
    res.status(403).json({ err: 'Error occured.' })
  }
}

// const upsertUser = await prisma.user.upsert({
//   where: {
//     userid: user.sub,
//   },
//   update: {},
//   create: {
//     userid: user.sub,
//     name: user.nickname,
//     email: user.email
//   },
// })
