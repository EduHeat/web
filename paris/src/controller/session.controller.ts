import { get } from 'lodash';
import { Request, Response } from 'express';
import { validatePassword } from '../service/user.service';
import { createAccessToken, createSession, findSessions, updateSession } from '../service/session.service';
import { sign } from '../utils/jwt.utils';
import config from '../../config/default'

export const createUserSessionHandler = async (req: Request, res: Response) => {
  // validate email and pass
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send('Invalid email or password!');
  }
  // create a session
  const session = await createSession(user._id, req.get('user-agent') || '');

  // create access token
  const accessToken = createAccessToken({
    user, session
  })

  // create refresh token
  const refreshToken = sign(session, {
    expiresIn: config.refreshTokenTtl
  })

  // send refresh and access token back
  return res.send({ accessToken, refreshToken })
};

export const invalidateUserSessionHandler = async (req: Request, res: Response) => {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export const getUserSessionsHandler = async (req: Request, res: Response) => {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });
  
  return res.send(sessions);
}