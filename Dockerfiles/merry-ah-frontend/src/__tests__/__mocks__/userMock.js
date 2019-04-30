const loginMockData = {
  authResponse: {
    status: 'Ok',
    messages: 'User logged in successfully',
    data: {
      token:
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwi
    dXNlcm5hbWUiOiJhYmVqaWRlLWZlbWkiLCJ1c2VyRW1haWwiO
    iJlbWFpbDFAZ21haWwuY29tIiwic2lnblVwVHlwZSI6ImxvY2FsI
    iwidXNlclR5cGUiOiJhcnRpc3QiLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxN
    TQ5OTU4MzQyLCJleHAiOjE1NDk5OTQzNDJ9.bhi0P_Zsiu2IjNZJ19XS
    5DUDHQofUzHHW_mfGysHo7U`,
    },
  },
  signinData: {
    email: 'email1@gmail.com',
    password: 'abcdefgh',
  },
};

const signUpMockData = {
  authResponse: {
    "status": "Ok",
    "code": 201,
    "messages": "User created successfully and verification link sent to your Email",
    "data": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInJlZ2lzdGVyZWRVc2VybmFtZSI6InNsaWNrMDA3IiwicmVnaXN0ZXJlZEVtYWlsIjoiZG1vcm9kb2x1QGljbG91ZC5jb21tbSIsInVzZXJTaWdudXBUeXBlIjoiYXJ0aXN0IiwidXNlclR5cGUiOiJhcnRpc3QiLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxNTUwMTYyNzQ2LCJleHAiOjE1NTAxOTg3NDZ9.DprH5C0k5dU0zwU7xIzThk0P-Wo6rRdbeshZ0_qehS0"
    }
  },
  signUpData: {
    firstName: 'Dan',
    lastName: 'Watkins',
    email:'dmorodolu@icloud.commm',
    confirm_email:'dmorodolu@icloud.comm',
    username: 'slick007',
    password:'12345',
    userType:'artist',
    image:'bio.png',
    bio:'Seamless'
  },
};

export {loginMockData, signUpMockData};
