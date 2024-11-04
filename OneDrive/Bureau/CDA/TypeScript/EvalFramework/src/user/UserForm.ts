import { View } from "../framework/views/View"
import { User, UserProps } from "./User"

export class UserForm extends View<User, UserProps>
{

    onSetAgeClick = () =>
    {
        this.model.setRandomAge();
    }

    onSetNameClick = () =>
    {
        const input = document.getElementById('nameInput') as HTMLInputElement;
        const name = input.value;
        this.model.set({ name });
    }

    onSaveClick = () =>
    {
        this.model.save()
    }

    template() {
        return `
            <div>
                <h1>User Form</h1>
                <label>Nom</label>
                <input class="nameInput" placeholder="Name" value="${this.model.get('name') || ''}" />
                <button class="set-name">Set Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Create/Save User</button>
            </div>
        `
    }

    eventsMap() : {[key: string] : () => void}
    {
        return {
            'click:.set-age': this.onSetNameClick,
            'click:.set-name': this.onSetAgeClick,
            'click:.save-model': this.onSaveClick
        }
    }
    
}