import { UserList } from './user/UserList';
import { UserShow } from './user/UserShow';
import { UserForm } from './user/UserForm';
import { User } from './user/User';


const userCollection = User.buildCollection();

const userShow = new UserShow
(
  document.getElementById('user-show')!,
  User.build({ id: '', name: '', age: 0 })
);

const userList = new UserList
(
  document.getElementById('user-list')!,
  userCollection,
  userShow
);
userList.render();
userCollection.fetch();

userShow.render();

const userForm = new UserForm
(
  document.getElementById('user-form')!,
  User.build({ name: ''})
);
userForm.render();


