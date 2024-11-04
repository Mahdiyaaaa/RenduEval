import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps>
{
    template()
    {
        return `
            <div>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input id="nameInput" value="${this.model.get('name') || ''}" placeholder="Name" />
                <input id="ageInput" type="number" value="${this.model.get('age') || ''}" placeholder="Age" />
                <button id="saveButton">Save User</button>
            </div>
        `
    }

    eventsMap(): { [key: string]: () => void }
    {
        return {
          'click:#saveButton': this.onSaveClick,
        };
    }
    
    
      onSaveClick = (): void =>
    {
        const name = (document.getElementById('nameInput') as HTMLInputElement).value;
        const age = parseInt((document.getElementById('ageInput') as HTMLInputElement).value, 10);
        this.model.set({ name, age });
        this.model.save();
    };
}