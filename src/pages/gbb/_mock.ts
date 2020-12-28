import { Request, Response } from 'express';
import {
  gbb,
  wc,
  stalzRe,
  wcContent,
  activeProject,
  bitProject,
  draftProject,
  completeProject,
} from './data.d';

function getGbbData(req: Request, res: Response, u: string) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const result = {
    gbb,
    wc,
    stalzRe,
    wcContent,
    activeProject,
    bitProject,
    draftProject,
    completeProject,
  };
  return res.json(result);
}
export default {
  'GET /api/GbbData': getGbbData,
};
