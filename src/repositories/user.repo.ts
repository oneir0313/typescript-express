import { User } from '../entities/user.entity';
import { DeleteResult, getRepository } from 'typeorm';

export function getUsers(): Promise<User[]> {
    return getRepository(User).find();
}

export async function createUser(data: User):Promise<User> {
    const newUser = getRepository(User).create(data);
    return await getRepository(User).save(newUser);
}

export function getUser(id: string): Promise<User> {
    return getRepository(User).findOne(id);
}

export async function updateUser(id: string, data: User): Promise<User> {
    const modifyUser = new User();
    modifyUser.name = data.name;
    modifyUser.email = data.email;

    await getRepository(User).update(id, modifyUser);
    return await getRepository(User).findOne(id);
}

export function deleteUser(id: string): Promise<DeleteResult> {
    return getRepository(User).delete(id);
}
