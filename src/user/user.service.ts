import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ManyToMany, OneToOne, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepository: Repository<User>
  ) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.UserRepository.find({
      relations: {
          profile: true,
      },
  })
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove (id: number) {
    const User = await this.findOne(id);
   await this.UserRepository.remove(User);
    return 'usuario eliminado'
   }

   @OneToOne(() => User, user => user.profile, { onDelete: 'CASCADE' })
   User : User;
   
 }