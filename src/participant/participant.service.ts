import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant } from './entities/participant.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participant: Repository<Participant>,
  ) {
  }

  async create(createParticipantDto: CreateParticipantDto) {
    return 'This action adds a new participant';
  }

  async findAll() {
    return this.participant.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  async update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  async remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
