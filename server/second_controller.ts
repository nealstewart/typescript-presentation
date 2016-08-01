import * as express from 'express'

export function other(req: express.Request, res: express.Response) {
	res.send('other');
}
