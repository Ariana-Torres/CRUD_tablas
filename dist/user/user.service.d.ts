import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    private UserRepository;
    constructor(UserRepository: Repository<User>);
    create(createUserDto: CreateUserDto): string;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): Promise<string>;
    User: User;
}
