import { Request, Response } from 'express'
import { createUser, deleteUser } from "../service/user.service"

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body)
    return res.send(user)
  } catch (err: any) {
    return res.status(409).send(err.message)
  }
}

export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    await deleteUser(req.body.id as string)
    return res.status(204).send({ status: "success" })
  } catch (err: any) {
    return res.status(409).send(err.message)
  }
}
