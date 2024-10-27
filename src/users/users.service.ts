import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import data from 'src/data';

@Injectable()
export class UsersService {
  private users = [...data.users]; 

  create(createUserInput: CreateUserInput) {
    const newId = Math.floor(Math.random() * 1000); 
    const newUser = {
      id: newId.toString(), 
      ...createUserInput,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll() {
    return this.users;
  }

}