import { Collection } from "../framework/Collection";
import { User, UserProps } from "./User";
import { UserShow } from "./UserShow";

export class UserList
{
  constructor
  (
    public parent: Element, 
    public collection: Collection<User, UserProps>,
    private userShow: UserShow
  )
  {
    this.collection.on('change', this.render.bind(this)); 
  }

  render(): void
  {
    
    this.parent.innerHTML = `
      <h2>User List</h2>
      <select id="user-select"></select>`;

    const selectElement = this.parent.querySelector('#user-select') as HTMLSelectElement;

    this.collection.models.forEach((user) =>
    {
      const option = document.createElement('option');
      option.value = user.get('id') || '';  
      option.textContent = user.get('name') || 'Unknown';
      selectElement.appendChild(option);
    });

    
    selectElement.addEventListener('change', this.onUserSelect.bind(this));
  }

  onUserSelect(event: Event): void
  {
    const selectElement = event.target as HTMLSelectElement;
    const selectedUserId = selectElement.value;

    const selectedUser = this.collection.models.find(user => user.get('id') === selectedUserId);

    if (selectedUser) 
    {
      this.userShow.model = selectedUser;
      this.userShow.render();
    }
  }
}

