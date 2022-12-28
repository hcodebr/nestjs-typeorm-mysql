import { CanActivate } from '@nestjs/common';

export const guardMock: CanActivate = {
  canActivate: jest.fn(() => true),
};
