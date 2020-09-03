import { Test, TestingModule } from '@nestjs/testing';
import { DataEventProvider } from './data-event-provider';

describe('DataEventProvider', () => {
  let provider: DataEventProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataEventProvider],
    }).compile();

    provider = module.get<DataEventProvider>(DataEventProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
