import { Collection } from "../framework/Collection";
import { User, UserProps } from "./User";

export class UserList
{
  constructor
  (
    public parent: Element, 
    public collection: Collection<User, UserProps>
  )
  {
    this.collection.on('change', this.render.bind(this)); 
  }

  render(): void
  {
    
    this.parent.innerHTML = '<h2>User List</h2>     ';

    const selectElement = document.createElement('select');
    selectElement.id = 'user-select';

    this.collection.models.forEach((user) =>
    {
      const option = document.createElement('option');
      option.value = user.get('id') || '';  
      option.textContent = user.get('name') || 'Unknown';
      selectElement.appendChild(option);
    });

    
    this.parent.appendChild(selectElement);
  }
}

