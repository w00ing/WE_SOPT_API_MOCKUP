const existingUser = {
  id: 1,
  name: '김우영',
  password: '123456',
  email: 'kimwy1997@gmail.com',
};

const newName = '새로운 이름';

const updatedUser1 = { ...existingUser, newName }; // name에 '새로운 이름'이 할당됨

const updatedUser2 = { newName, ...existingUser }; // name에 '새로운 이름'이 할당되었다가 다시 '김우영'이 할당됨
