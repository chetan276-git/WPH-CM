// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'chetan',
      content: 'lorem lipsumnjasdf asdf a sdf',
      email: 'email.com',
    },
    {
      id: 2,
      name: 'raj',
      content: 'resoo',
      email: 'emailsadfdadfs',
    },
  ]);
}
