import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './form.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form)
    private formRepository: Repository<Form>,
  ) {}

  create(formData: Partial<Form>) {
    const form = this.formRepository.create(formData);
    return this.formRepository.save(form);
  }

  findAll(): Promise<Form[]> {
    return this.formRepository.find();
  }
}
