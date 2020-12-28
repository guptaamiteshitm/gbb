// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';
import { parse } from 'url';
import { UserListItem, UserListParams } from './data.d';

// mock userDataSource
const genList = (current: number, pageSize: number) => {
  const userDataSource: UserListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    userDataSource.push({
      key: index,
      disabled: i % 6 === 0,
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 3],
      address: [' 4B,10184,Arya Samaj Rd,Karol Bagh,', ' 4B,10184,Arya Samaj Rd,Karol Bagh,'][
        i % 2
      ],
      userName: ['John Doe', 'Maxmillan'][i % 2],
      tax: 'tax is a compulsory financial charge',
      registration: `DL3TMP${index}`,
      contact: ' +1 413-461-9698',
      company: ['Enbake Consulting Pvt.Ltd.', 'Vipro Consulting Pvt.Ltd.'][i % 2],
      callNo: Math.floor(Math.random() * 1000),
      status: (Math.floor(Math.random() * 10) % 5).toString(),
      createdAt: new Date(),
      progress: Math.ceil(Math.random() * 100),
    });
  }
  userDataSource.reverse();
  return userDataSource;
};

let userDataSource = genList(1, 100);

function getUser(req: Request, res: Response, u: string) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = (parse(realUrl, true).query as unknown) as UserListParams;

  let dataSource = [...userDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  const sorter = JSON.parse(params.sorter as any);
  if (sorter) {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter as any) as {
      [key: string]: string[];
    };
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter((item) => {
        return Object.keys(filter).some((key) => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.registration) {
    dataSource = dataSource.filter((data) => data.registration.includes(params.registration || ''));
  }
  const result = {
    data: dataSource,
    total: userDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };

  return res.json(result);
}

function postUser(req: Request, res: Response, u: string, b: Request) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }

  const body = (b && b.body) || req.body;
  const { method, registration, company, contact, key, address, userName, tax, status } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      userDataSource = userDataSource.filter((item) => key.indexOf(item.key) === -1);
      break;
    case 'post':
      (() => {
        const i = Math.ceil(Math.random() * 10000);
        const newUser = {
          key: userDataSource.length,
          avatar: [
            'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
            'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
          ][i % 2],
          address,
          userName,
          tax,
          registration,
          company,
          contact,
          callNo: Math.floor(Math.random() * 1000),
          status,
          createdAt: new Date(),
          progress: Math.ceil(Math.random() * 100),
        };
        userDataSource.unshift(newUser);
        return res.json(newUser);
      })();
      return;

    case 'update':
      (() => {
        let newUser = {};
        userDataSource = userDataSource.map((item) => {
          if (item.key === key) {
            newUser = {
              ...item,
              company,
              contact,
              registration,
              address,
              userName,
              tax,
              status,
            };
            return {
              ...item,
              company,
              contact,
              registration,
              address,
              userName,
              tax,
              status,
            };
          }
          return item;
        });
        return res.json(newUser);
      })();
      return;
    default:
      break;
  }

  const result = {
    list: userDataSource,
    pagination: {
      total: userDataSource.length,
    },
  };

  res.json(result);
}

export default {
  'GET /api/user': getUser,
  'POST /api/user': postUser,
};
