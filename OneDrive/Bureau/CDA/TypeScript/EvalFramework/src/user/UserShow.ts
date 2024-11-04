import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps>
{
    template()
    {
        return `
            <div>
                <h2>User Show</h2>
                <div>Nom: ${this.model.get('name')}</div>
                <div>Âge: ${this.model.get('age')}</div>
            </div>
        `
    }
}