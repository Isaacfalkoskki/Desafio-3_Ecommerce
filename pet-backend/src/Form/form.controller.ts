import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './form.entity';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) { }

  @Post()
  async submitForm(@Body() formData: Partial<Form>): Promise<Form> {
    return this.formService.create(formData);
  }

  @Get()
  async getAllForms(): Promise<Form[]> {
    return this.formService.findAll();
  }
}
