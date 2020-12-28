// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import city from './geographic/city.json';
import province from './geographic/province.json';

function getProvince(_: Request, res: Response) {
  return res.json(province);
}

function getCity(req: Request, res: Response) {
  return res.json(city[req.params.province]);
}
// The code will be compatible with the local service mock and the static data of the deployment site
export default {
  // eslint-disable-next-line no-irregular-whitespace
  // Supported values ​​are Object and Array
  'GET  /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: 'Be tolerant to diversity, tolerance is a virtue',
    title: 'Interaction expert',
    group:
      'Ant Financial Services-XX Business Group-XX Platform Department-XX Technology Department-UED',
    tags: [
      {
        key: '0',
        label: 'Very thoughtful',
      },
      {
        key: '1',
        label: 'Focus on design',
      },
      {
        key: '2',
        label: 'Spicy~',
      },
      {
        key: '3',
        label: 'Long legs',
      },
      {
        key: '4',
        label: 'Chuan Meizi',
      },
      {
        key: '5',
        label: 'Inclusive of all rivers',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'India',
    geographic: {
      province: {
        label: 'Gujarat',
        key: '330000',
      },
      city: {
        label: 'Ahmedabad',
        key: '330100',
      },
    },
    address: '4B, 10184, Arya Samaj Rd, Block 15, WEA, Karol Bagh, New Delhi',
    phone: '0752-268888888',
  },
  'GET  /api/geographic/province': getProvince,
  'GET  /api/geographic/city/:province': getCity,
};
