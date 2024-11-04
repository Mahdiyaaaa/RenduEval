import { UserList } from './user/UserList';
import { UserShow } from './user/UserShow';
import { UserForm } from './user/UserForm';
import { User } from './user/User';


const userCollection = User.buildCollection();

const userList = new UserList
(
  document.getElementById('user-list')!,
  userCollection
);
userList.render();

const userShow = new UserShow
(
  document.getElementById('user-show')!,
  User.build({ id: '1f37', name: 'Mahdiya', age: 22 })
);
userShow.render();

const userForm = new UserForm
(
  document.getElementById('user-form')!,
  User.build({ id: '1f37', name: 'Mahdiya', age: 22 })
);
userForm.render();


userCollection.fetch();